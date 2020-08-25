import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid var(--dark-color);
  height: 89px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > h3 {
    color: var(--secondary-color);
    font-size: 20px;
    font-weight: 200;
    text-transform: uppercase;
  }
`;
