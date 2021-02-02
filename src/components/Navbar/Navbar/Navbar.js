import React, { useState } from "react";
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

export default function Navbar() {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const history = useHistory();

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
      let key = app
        .database()
        .ref("users/" + user.uid + "/posts")
        .push().key;
      console.log(user);
      app
        .database()
        .ref("users/" + user.uid + "/posts")
        .push()
        .update({
          title: e.target.title.value,
          description: e.target.description.value,
          postId: key,
        });
    } catch {
      setError("Something went horribly, horribly wrong D':");
      setErrorOpen(!errorOpen);
    }
    setIsOpen(!isOpen);
  }

  function profile() {
    history.push("/myProfile");
  }
  return (
    <div>
      <NavbarBox>
        <NavbarHeader>Notes to No One</NavbarHeader>
        <NavbarButton>+ Next</NavbarButton>
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
