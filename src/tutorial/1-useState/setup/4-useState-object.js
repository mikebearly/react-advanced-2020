import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 31,
    message: 'random message',
    location: 'India',
  });
  const handleChange = () => {
    setPerson({
      ...person,
      message: 'Hello World will work',
      location: 'US',
    });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <h3>{person.location}</h3>
      <button className="btn" onClick={handleChange}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
