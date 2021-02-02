import React, { useState, useEffect } from "react";
import {
  PostBox,
  PostHead,
  PostTitle,
  PostDelete,
  PostDesc,
} from "./Post.elements";
import app, { auth } from "../../../firebase";

export default function Post() {
  const [allPosts, setAllPosts] = useState(null);

  let user = auth.currentUser;

  function fetchData() {
    let ref = app
      .database()
      .ref("users/" + user.uid + "/posts")
      .on("value", (snapshot) => {
        console.log(snapshot.val());
        let userPostConvert =
          snapshot.val() === null ? null : Object.values(snapshot.val());
        setAllPosts(userPostConvert);
      });
    return ref;
  }
  console.log(allPosts);

  useEffect(() => {
    fetchData();
  }, [user.uid]);

  return allPosts === null
    ? ""
    : allPosts.map((posts) => {
        return (
          <PostBox>
            <PostHead>
              <PostTitle>{posts.title}</PostTitle>
              <PostDelete />
            </PostHead>
            <PostDesc>{posts.description}</PostDesc>
          </PostBox>
        );
      });
}
