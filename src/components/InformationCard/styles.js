import styled from "styled-components";

export const InfoCard = styled.div`
  width: 50%;
`;
export const InfoHead = styled.div`
  align-items: center;
  display: flex;
  height: 85px;
  padding-left: 30px;
  width: 100%;
  border-bottom: 1px solid var(--secondary-color);
  margin-bottom: 30px;
`;

export const ButtonsList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoTitle = styled.div`
  color: var(--secondary-color);
  font-size: 22px;
  font-weight: 300;
`;

export const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  > div {
    display: flex;
    margin: 10px 5px;
    padding: 5px;
    align-items: center;
    background-color: var(--gray-color);
    width: 100%;
    min-height: 50px;
    border-radius: 10px;
    h3 {
      font-weight: 100;
      font-size: 20px;
      padding-right: 20px;
    }
    p {
      font-weight: 500;
      font-size: 20px;
    }
  }
`;
