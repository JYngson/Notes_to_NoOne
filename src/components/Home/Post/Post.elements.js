import styled from "styled-components";
import { CloseSquareOutline } from "@styled-icons/evaicons-outline/CloseSquareOutline";

export const PostBox = styled.div`
  width: 80%;
  height: 100%;
  padding: 3%;
  background-color: #b6bcdf;
  margin: 1vw 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const PostHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const PostTitle = styled.h1`
  font-size: 1.5rem;
  width: 90%;
  height: 100%;
  margin: 0;
`;

export const PostDelete = styled(CloseSquareOutline)`
  width: 5%;
  height: 5%;
  &:hover {
    color: red;
  }
`;

export const PostDesc = styled.p`
  font-size: 1rem;
  width: 100%;
  height: 70%;
  margin-top: 24px;
`;
