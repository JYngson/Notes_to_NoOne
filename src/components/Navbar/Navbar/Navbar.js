import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import app from "../../../firebase";
import {
  NavbarBox,
  NavbarButton,
  NavbarHeader,
  NavbarIcons,
  NavbarAdd,
  NavbarLogout,
  NavbarProfile,
} from "./Navbar.elements";

import {
  StyledModal,
  ModalBox,
  ModalTitleBox,
  ModalTitle,
  ModalClose,
  ModalDescription,
  ModalButton,
  ErrorModal,
  ErrorTitleBox,
  ErrorTitle,
  ErrorClose,
} from "./Modal.elements";
import { useRouteMatch } from "react-router-dom";

export default function Navbar() {
  const [error, setError] = useState("");
  const [profiles, setProfiles] = useState([]);
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const history = useHistory();
  let routeMatch = useRouteMatch();
  let matchId = useRouteMatch() == "/" ? "" : routeMatch.params.id;

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Error logging out! :(");
      setErrorOpen(!errorOpen);
    }
  }

  async function submit(e) {
    e.preventDefault();
    setError("");

    try {
      let user = app.auth().currentUser;
      app
        .database()
        .ref("users/" + user.uid + "/posts")
        .push()
        .update({
          title: e.target.title.value,
          description: e.target.description.value,
        });
    } catch {
      setError("Something went horribly, horribly wrong D':");
      setErrorOpen(!errorOpen);
    }
    setIsOpen(!isOpen);
  }

  function randomProfile() {
    try {
      console.log("cleek");
      let user = app.auth().currentUser;
      function profileCall(arr) {
        let filter = arr.filter((id) => id !== user.uid && id !== matchId);
        let profileString = filter[Math.floor(Math.random() * filter.length)];
        history.push("/profile/" + profileString);
      }
      profileCall(profiles);
    } catch {
      setError("Failed to get profile!");
      setErrorOpen(!errorOpen);
    }
  }

  function profile() {
    history.push("/myProfile");
  }

  function home() {
    history.push("/");
  }

  let data = () => {
    app
      .database()
      .ref("users/")
      .on("value", (snapshot) => {
        let profileConvert = Object.keys(snapshot.val());
        setProfiles(profileConvert);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <NavbarBox>
        <NavbarHeader onClick={home}>Notes to No One</NavbarHeader>
        <NavbarButton onClick={randomProfile}>+ Next</NavbarButton>
        <NavbarIcons>
          <NavbarAdd onClick={() => setIsOpen(!isOpen)} />
          <NavbarProfile onClick={profile} />
          <NavbarLogout onClick={handleLogout} />
        </NavbarIcons>
      </NavbarBox>

      <StyledModal isOpen={isOpen}>
        <ModalBox onSubmit={submit}>
          <ModalTitleBox>
            <ModalTitle placeholder={"Share a secret."} id="title" />
            <ModalClose onClick={() => setIsOpen(!isOpen)} />
          </ModalTitleBox>
          <ModalDescription
            placeholder={"Tell us about that."}
            id="description"
          />
          <ModalButton type="submit">Submit</ModalButton>
        </ModalBox>
      </StyledModal>

      <ErrorModal isOpen={errorOpen}>
        <ModalBox>
          <ErrorTitleBox>
            <ErrorTitle>{error}</ErrorTitle>
            <ErrorClose onClick={() => setErrorOpen(false)} />
          </ErrorTitleBox>
        </ModalBox>
      </ErrorModal>
    </div>
  );
}
