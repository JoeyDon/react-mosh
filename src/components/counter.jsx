import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevPros, prevState) {
    console.log("prevPros:", prevPros);
    console.log("prevState:", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmounted");
  }
  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter.id)}
        >
          Increment
        </button>

        <button
          className="btn btn-danger btn-sm ml-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge mr-5 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h4>Zero</h4> : value;
  }
}

export default Counter;
