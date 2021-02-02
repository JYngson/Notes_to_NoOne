import styled from "styled-components";
import { CloseSquareOutline } from "@styled-icons/evaicons-outline/CloseSquareOutline";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
display: flex;
width:70vw;
height: 80vh;
background: white;
border: 3px solid #779ed7;
padding: 2%;
border-radius: 10px;

`;

export const ModalBox = styled.form`
  height: 100%;
  width: 100%;
`;

export const ModalTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  margin-bottom: 3%;
`;
export const ModalTitle = styled.input`
  display: flex;
  justify-content: center;
  padding: 0 2%;
  width: 90%;
  height: 100%;
  border: 1px solid #779ed7;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export const ModalClose = styled(CloseSquareOutline)`
  width: 10%;
  height: 100%;
  &:hover {
    color: red;
  }
`;

export const ModalDescription = styled.textarea`
  width: 100%;
  height: 70%;
  padding: 2%;
  border: 1px solid #779ed7;
  border-radius: 10px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const ModalButton = styled.button`
  width: 200px;
  height: 50px;
  background: #779ed7;
  border: none;
  border-radius: 15px;
  margin-top: 2vh;
  color: white;
  &:hover {
    color: purple;
  }
`;

export const ErrorModal = Modal.styled`
display: flex;
width:50vw;
height: 20vh;
background: white;
border: 3px solid #779ed7;
padding: 2%;
border-radius: 10px;
`;

export const ErrorTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const ErrorTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  width: 90%;
  height: 100%;
  font-size: 1rem;
`;

export const ErrorClose = styled(CloseSquareOutline)`
  width: 10%;
  height: 100%;
  &:hover {
    color: red;
  }
`;
