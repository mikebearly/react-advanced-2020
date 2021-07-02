import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>short circuit</h1>
      <h2>1st Value: {firstValue}</h2>
      <h2>2nd Value: {secondValue}</h2>
    </>
  );
};

export default ShortCircuit;
