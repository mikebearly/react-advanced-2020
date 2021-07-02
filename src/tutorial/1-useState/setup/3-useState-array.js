import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // Normail way

    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);

    // updated with inner method
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove Item</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])} className="btn">
        remove Items
      </button>
    </>
  );
};

export default UseStateArray;
