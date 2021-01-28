import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  NavbarBox,
  NavbarButton,
  NavbarHeader,
  NavbarIcons,
  NavbarAdd,
  NavbarLogout,
  NavbarProfile,
} from "./Navbar.elements";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Error logging out! :(");
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
          <NavbarAdd />
          <NavbarProfile onClick={profile} />
          <NavbarLogout onClick={handleLogout} />
        </NavbarIcons>
      </NavbarBox>
    </div>
  );
}
