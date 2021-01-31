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
} from "./Modal.elements";

import Modal from "react-modal";

export default function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  // let user = app.auth().currentUser;

  // let ref = app.database().ref("users/" + user.uid);
  // ref.on("value", getData, errData);

  // function getData(data) {
  //   console.log(data.val());
  // }

  // function errData(err) {
  //   console.log("Error.");
  //   console.log(err);
  // }

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Error logging out! :(");
    }
  }

  async function submit(e) {
    e.preventDefault();
    setError("");

    try {
      let user = app.auth().currentUser;
      // let post = {
      //   title: e.target.title.value,
      //   description: e.target.description.value,
      // };
      console.log(user);
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
    }
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
    </div>
  );
}
