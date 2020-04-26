import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="text"
        name={count}
        placeholder="counter start"
        onChange={(event) => setCount(Number(event.target.value))}
      />
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>> +1</button>
      <button onClick={() => setCount(count - 1)}>> -1</button>
    </div>
  );
}

export default Counter;
