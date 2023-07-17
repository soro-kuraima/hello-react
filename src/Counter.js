import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function updateCounter() {
    setCounter(counter + 1);
  }

  //const [number, setNumber] = useState(4);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={updateCounter}>increase count</button>
    </div>
  );
}
