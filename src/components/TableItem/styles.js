import styled from 'styled-components';

export const ItemContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid var(--gray-color);
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  height: 55px;
  padding: 20px 20px;
  position: relative;
  transition: 0.4s;
  > *:not(:last-child) {
    display: inline;
    margin: 0 5px;
  }
  > :last-child {
    position: absolute;
    right: 0;
  }
  > svg,
  p {
    color: var(--dark-color);
    font-size: 14px;
    font-weight: 200;
    text-transform: capitalize;
  }
  > svg {
    font-size: 20px;
  }

  > p:before {
    content: '·';
    line-height: 20px;
    font-size: 20px;
    padding: 0 10px;
  }

  :hover {
    background-color: var(--gray-color);
  }
`;
