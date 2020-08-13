import React from 'react';
import { MdAccountCircle, MdLibraryBooks } from 'react-icons/md';

import { ItemContainer } from './styles';

const Icon = (type) => {
  switch (type) {
    case 'subject':
      return <MdLibraryBooks />;
    default:
      return <MdAccountCircle />;
  }
};

const testConfig = {
  id: '12345',
  lastName: 'lastName',
  name: 'name',
};

export const TableItem = ({ config = testConfig, type = 'teacher' }) => {
  const icon = Icon(type);
  const labels = Object.values(config);

  return (
    <ItemContainer>
      {icon}
      {labels.map((label) => (
        <p key={label}>{label}</p>
      ))}
      <button>Toggle Button</button>
    </ItemContainer>
  );
};
