import styled from 'styled-components';
import { Link } from '@reach/router';

export const SidebarContainer = styled.nav`
  background-color: var(--secondary-color);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  width: 256px;
  padding: 0px 20px 20px;
`;

export const SidebarHeader = styled.div`
  border-bottom: 1px solid var(--primary-color);
  display: flex;
  align-items: center;
  height: 89px;
  justify-content: center;
  padding: auto 0;
`;

export const Title = styled.h2`
  color: var(--gray-color);
  font-size: 20px;
  font-weight: 100;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemList = styled(Link)`
  align-items: center;
  color: #e8eddf;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-style: normal;
  justify-content: flex-start;
  line-height: 30px;
  text-transform: uppercase;
  text-decoration: none;
  padding-top: 20px;

  &[aria-current] {
    color: var(--yellow-color);
  }
  > svg {
    font-size: 30px;
    margin-right: 10px;
  }
`;

export const SidebarFooter = styled.div`
  position: absolute;
  bottom: 20px;
`;
