import React, { useEffect } from 'react';
import useLocalStorage from "./useLocalStorage"

export default function Counter({ step }) {
  var [count, setCount] = useLocalStorage("count", 0);
  useEffect(() => {
    document.title = `Count (${count})`;
  }, [count]);
  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount(count + step)}>Increment</button>
        <button onClick={() => setCount(count && count - step)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>
    </div>
  );
};
