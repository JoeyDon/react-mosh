import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge mr-5 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h4>Zero</h4> : count;
  }
}

export default Counter;
