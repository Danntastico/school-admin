import styled from "styled-components";

export const CardContent = styled.div`
  margin: 50px 10px;
  min-width: 300px;
`;
export const HeaderInfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > h3 {
    font-weight: 100;
    text-transform: capitalize;
  }
  > button {
    font-weight: 500;
    font-size: 10px;
    background-color: var(--gray-color);
    min-width: 90px;
    height: 27px;
    transition: 0.4s;
    :hover {
      transform: translate(0, -2px);
    }
  }
`;
export const BodyInfoCard = styled.div`
  margin: 20px 0;
`;
