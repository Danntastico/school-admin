import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const slideInKeyFrames = keyframes`
  from{
    transform: translate3d(0, -600px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
  `;

export const slideIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${slideInKeyFrames} ${type};
  `;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;
