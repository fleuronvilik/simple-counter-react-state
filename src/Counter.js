import React from 'react';

export default function Counter({ step }) {
  var [count, setCount] = React.useState(0);
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
