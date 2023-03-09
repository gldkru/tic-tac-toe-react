import React from 'react';

export const Button = ({
  onClick,
  children,
  type = 'button',
  ...attributes
}) => (
  <button type={type} onClick={onClick} {...attributes}>
    {children}
  </button>
);
