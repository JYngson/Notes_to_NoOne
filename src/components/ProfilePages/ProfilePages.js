import React from "react";
import NavAuth from "../Navbar/NavAuth";
import { ProfileBox, ProfileBoard } from "./ProfilePages.elements";
import Post from "./Post/Post";

export default function ProfilePages() {
  return (
    <>
      <NavAuth />
      <ProfileBox>
        <ProfileBoard>
          <Post />
        </ProfileBoard>
      </ProfileBox>
    </>
  );
}
