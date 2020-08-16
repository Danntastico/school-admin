import styled from "styled-components";
import { fadeIn } from "../../styles/anitmation";

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
  @media screen and (min-width: $break-medium) {
    padding-top: 50px;
  }
  @media screen and (min-width: $break-large) {
    padding-top: 50px;
  }
`;

export const ModalChildren = styled.div`
  ${fadeIn()}
  position: relative;
  margin: auto;
  padding: 0;
  width: 80%;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  @media screen and (min-width: $break-medium) {
    width: 70%;
  }
`;
