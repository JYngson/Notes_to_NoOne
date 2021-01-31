import React, { useState, useEffect } from "react";
import { PostBox, PostHead, PostDesc } from "./Post.elements";
import app from "../../../firebase";

export default function Post() {
  const [user, setUser] = useState([]);
  const [userID, setUserId] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    const db = app.firestore();
    setLoading(true);
    db.collection("users")
      .doc("user1")
      .get()
      .then((result) => {
        setUser(result.data());
        setUserId(result.id);
      });
    console.log(user);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [userID]);

  if (loading) {
    return "";
  }
  return (
    <>
      {/* {user.length > 0 && (
        <PostBox key={user.ID}>
          <PostHead>{user.Posts.Title}</PostHead>
          <PostDesc>{user.Posts.Description}</PostDesc>
        </PostBox>
      )} */}
    </>
  );
}
