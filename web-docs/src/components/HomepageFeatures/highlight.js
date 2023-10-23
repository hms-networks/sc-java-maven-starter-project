import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        fontWeight: 'bolder',
        color: color,
      }}>
      {children}
    </span>
  );
}