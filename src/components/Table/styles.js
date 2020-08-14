import styled from 'styled-components';

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
export const TableContent = styled.div`
  margin: 10px 50px;
`;
