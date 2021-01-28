import React from "react";
import NavAuth from "../Navbar/NavAuth";
import { ProfileBox, ProfileBoard } from "./Home.elements";
import Post from "./Post/Post";

export default function Home() {
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
