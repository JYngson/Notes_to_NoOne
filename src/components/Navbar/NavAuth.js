import React from "react";
import Navbar from "./Navbar/Navbar";
import { AuthProvider } from "../contexts/AuthContext";

export default function NavAuth() {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
}
