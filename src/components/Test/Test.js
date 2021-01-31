import React, { useState, useEffect } from "react";
import app from "../../firebase";
import { useAuth } from "../../components/contexts/AuthContext";

export default function Test() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = app.firestore().collection("users");

  async function getUser() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((user) => {
        items.push(user.data());
      });
      setUser(items);
      console.log(user);
      setLoading(false);
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return "";
  }

  return (
    <div>
      <h1> Test Site Keep Out </h1>
      {/* <div key={user.id}>
        <h2>{user.Posts.Title}</h2>
        <p>{user.Posts.Description}</p>
      </div> */}
      ))
    </div>
  );
}
