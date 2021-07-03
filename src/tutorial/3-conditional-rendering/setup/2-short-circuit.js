import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/*<h1>short circuit</h1>
      <h2>1st Value: {firstValue}</h2>
      <h2>2nd Value: {secondValue}</h2>*/}
      <h1>{text || 'Navis'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {/* text && 'Hello World' */}
      {/* !text && 'Hello World' */}
      {isError && <h3>Error...</h3>}
      {isError ? <h3>Error...</h3> : <h3>this is no error</h3>}
    </>
  );
};

export default ShortCircuit;
