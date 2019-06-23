import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    // Deconstruct component
    const { onReset, onDelete, onIncrement, counters } = this.props;

    return (
      <div>
        <button className="btn btn-primary" onClick={onReset}>
          Clear all
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h3> ID: {counter.id} (children)</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
