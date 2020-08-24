import styled from "styled-components";
import { slideIn } from "../../../styles/anitmation";

export const Modal = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: fit-content;
  padding-top: 20px;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.4s;
`;

export const ModalChildren = styled.div`
  ${slideIn()}
  position: relative;
  margin: auto;
  padding: 0;
  width: 480px;
  background-color: #ffffff;
  padding: 0px 20px 40px;
  border-radius: 20px;
`;
