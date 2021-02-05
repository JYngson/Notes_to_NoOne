import React, { useState, useEffect } from "react";
import { PostBox, PostHead, PostTitle, PostDesc } from "./Post.elements";
import { useRouteMatch } from "react-router-dom";
import app, { auth } from "../../../firebase";
import uuid from "react-uuid";

export default function Post() {
  const [allPosts, setAllPosts] = useState(null);
  let user = auth.currentUser;
  let routeMatch = useRouteMatch("/profile/:id");
  let matchId = routeMatch.params.id;

  function fetchData() {
    let ref = app
      .database()
      .ref("users/" + matchId + "/posts")
      .on("value", (snapshot) => {
        console.log(snapshot.val());
        let userPostConvert =
          snapshot.val() === null
            ? null
            : Object.values(snapshot.val()).reverse();
        let userPostKeyConvert =
          snapshot.val() === null
            ? null
            : Object.keys(snapshot.val()).reverse();

        if (userPostConvert !== null) {
          userPostConvert.forEach((post, i) => {
            post.postId = userPostKeyConvert[i];
          });
        }
        setAllPosts(userPostConvert);
      });
    return ref;
  }
  console.log(allPosts);

  useEffect(() => {
    fetchData();
  }, [matchId]);

  return allPosts === null
    ? ""
    : allPosts.map((posts) => {
        return (
          <PostBox key={uuid()}>
            <PostHead>
              <PostTitle>{posts.title}</PostTitle>
            </PostHead>
            <PostDesc>{posts.description}</PostDesc>
          </PostBox>
        );
      });
}
