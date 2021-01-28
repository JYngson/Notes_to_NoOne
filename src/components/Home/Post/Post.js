import React from "react";
import { PostBox, PostHead, PostDesc } from "./Post.elements";

export default function Post() {
  return (
    <PostBox>
      <PostHead>Title</PostHead>
      <PostDesc>Description</PostDesc>
    </PostBox>
  );
}
