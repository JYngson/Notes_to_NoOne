import React from "react";
import Signup from "./Signup/Signup";
import { Container, Image } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Pic from "../../assets/images/2.jpeg";

export default function SignupPage() {
  return (
    <AuthProvider>
      <Image src={Pic} className="position-absolute w-100 h-100" />
      <Container
        className="d-flex align-items-center justify-content-center background-color-white"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}
