import React, { useState } from 'react';

export default function Eight() {
  const [backgroundColor, setBackgroundColor] = useState("Green");

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: '200px',
        height: '200px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold'
      }}
    >
      Click me to change color
    </div>
  );
}
