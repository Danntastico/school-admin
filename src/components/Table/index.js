import React from 'react';

export const Table = ({ title, children }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <button>Add New Item</button>
      </div>
      <div>{children}</div>
    </div>
  );
};
