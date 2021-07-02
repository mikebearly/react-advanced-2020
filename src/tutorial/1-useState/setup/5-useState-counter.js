import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const increaseCounter = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
    // setValue(value + 1);
  };
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h4>{value}</h4>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>complex counter</h2>
        <h4>{value}</h4>
        <button className="btn" onClick={increaseCounter}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
