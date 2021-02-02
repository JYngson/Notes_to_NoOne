import React, { useState, useEffect } from "react";
import {
  PostBox,
  PostHead,
  PostTitle,
  PostDelete,
  PostDesc,
  PostId,
} from "./Post.elements";
import app, { auth } from "../../../firebase";
import uuid from "react-uuid";

export default function Post() {
  const [allPosts, setAllPosts] = useState(null);
  let user = auth.currentUser;

  function deletePost(e) {
    e.preventDefault();

    let postId = e.target.getAttribute("data-key");
    console.log(postId);

    app
      .database()
      .ref("users/" + user.uid + "/posts/" + postId)
      .remove();
  }

  function fetchData() {
    let ref = app
      .database()
      .ref("users/" + user.uid + "/posts")
      .on("value", (snapshot) => {
        console.log(snapshot.val());
        let userPostConvert =
          snapshot.val() === null ? null : Object.values(snapshot.val());
        let userPostKeyConvert =
          snapshot.val() === null ? null : Object.keys(snapshot.val());

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
  }, [user.uid]);

  return allPosts === null ? (
    <h2>Make a post to begin!</h2>
  ) : (
    allPosts.map((posts) => {
      return (
        <PostBox key={uuid()}>
          <PostHead>
            <PostTitle>{posts.title}</PostTitle>
            <PostDelete onClick={deletePost} data-key={posts.postId} />
          </PostHead>
          <PostDesc>{posts.description}</PostDesc>
        </PostBox>
      );
    })
  );
}
