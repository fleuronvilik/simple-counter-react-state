import React, { Component } from 'react';

function updateDocumentTitle({ count }) {
  document.title = `Count (${count})`;
}
function decrement(state, props) {
  if (!state.count) return;
  return { count: state.count - props.step}
}
function increment(state, props) {
  return { count: state.count + props.step}
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState(increment, () => updateDocumentTitle(this.state));
  }
  decrement() {
    this.setState(decrement, () => updateDocumentTitle(this.state));
  }
  reset() {
    this.setState({ count: 0 }, () => updateDocumentTitle(this.state));
  }
  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
