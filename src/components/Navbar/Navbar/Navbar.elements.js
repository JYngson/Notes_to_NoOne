import styled from "styled-components";
import { BookAdd } from "@styled-icons/boxicons-solid/BookAdd";
import { Profile } from "@styled-icons/remix-fill/Profile";
import { LogoutCircleR } from "@styled-icons/remix-line/LogoutCircleR";

export const NavbarBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
`;

export const NavbarHeader = styled.h1`
  margin: 0 2%;
  font-size: 1.4rem;
`;

export const NavbarButton = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: #fff51d;
  font-size: 1.3rem;
`;

export const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12%;
  padding: 16px;
  height: 100%;
`;

export const NavbarAdd = styled(BookAdd)`
  width: 30px;
  height: 30px;
`;

export const NavbarProfile = styled(Profile)`
  width: 30px;
  height: 30px;
`;

export const NavbarLogout = styled(LogoutCircleR)`
  width: 30px;
  height: 30px;
`;
