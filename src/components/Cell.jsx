import React, { useEffect } from 'react';

export const Cell = ({ index, className = '', onClick }) => {
  // -- props
  // props.activeClassName
  // props.onClick

  useEffect(() => {
    console.log(index, 'render');
  }, [className]);

  return <div className={`cell ${className}`.trim()} onClick={onClick}></div>;
};
