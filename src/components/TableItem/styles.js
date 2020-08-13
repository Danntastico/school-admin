import React from 'react';
import styled from 'styled-components';

export const ItemContainer = styled.div`
  position: relative;
  height: 55px;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-color);

  > *:not(:last-child) {
    display: inline;
    margin: 0 5px;
  }
  > :last-child {
    position: absolute;
    right: 0;
  }
`;
