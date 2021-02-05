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
  max-height: 100px;
  background-color: white;
  color: #779ed7;
`;

export const NavbarHeader = styled.h1`
  margin: 0 2%;
  font-size: 1.4rem;
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarButton = styled.button`
  width: 10%;
  max-width: 200px;
  height: 85%;
  border: none;
  border-radius: 10px;
  background-color: #779ed7;
  font-size: 1.3rem;
  color: white;
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
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarProfile = styled(Profile)`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarLogout = styled(LogoutCircleR)`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;
