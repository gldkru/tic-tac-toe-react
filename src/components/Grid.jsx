import React from 'react';
import { Cell } from './Cell';

export const Grid = ({ onCellClick, compare }) => {
  return (
    <div className="grid">
      {Array.from(Array(9)).map((_, index) => (
        <Cell
          key={index}
          className={compare(index)}
          onClick={() => onCellClick(index)}
          index={index}
        />
      ))}
    </div>
  );
};
