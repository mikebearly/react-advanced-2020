import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const refDivContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(refDivContainer.current.innerText);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="man" id="man" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={refDivContainer}>Hello Word</div>
    </>
  );
};

export default UseRefBasics;
