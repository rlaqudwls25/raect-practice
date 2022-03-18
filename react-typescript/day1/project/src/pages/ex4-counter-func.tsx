import React, { useState } from "react";

function Ex4CounterFunc() {
  const [count, setCount] = useState(0);
  const [diff, setDiff] = useState(10);

  const increase = (): void => {
    setCount((count) => count + diff);
  };

  const decrease = (): void => {
    setCount((count) => count - diff);
  };

  const changeDiff = (e: any) => {
    setDiff(Number(e.target.value));
    console.log(typeof e.target.value);
  };

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => increase()}>increase</button>
      <button onClick={() => decrease()}>increase</button>
      <input onChange={(e) => changeDiff(e)}></input>
    </div>
  );
}

export default Ex4CounterFunc;
