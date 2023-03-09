import React from 'react';

export const Cell = ({ className = '', onClick }) => {
  // -- props
  // props.activeClassName
  // props.onClick
  return <div className={`cell ${className}`.trim()} onClick={onClick}></div>;
};
