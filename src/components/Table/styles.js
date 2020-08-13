import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffff;
  border-radius: 20px;
  box-shadow: 0px 5px 5px 0px rgba(207, 219, 213, 1);
  padding-bottom: 70px;
`;

export const TableHeader = styled.div`
  align-items: center;
  display: flex;
  height: 85px;
  justify-content: space-between;
  border-bottom: 1px solid var(--secondary-color);
  padding: 0 50px;

  > h2 {
    font-size: 20px;
    color: var(--secondary-color);
    font-weight: 200;
    text-transform: capitalize;
  }
`;
