import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Movies from "./components/movies";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("APP - CONSTRUCT");
  }

  componentDidMount() {
    // AJAX
    console.log("APP - mounted");
  }

  handleDelete = id => {
    this.setState({
      counters: this.state.counters.filter(e => e.id !== id)
    });
  };

  handleReset = () => {
    const resetCounters = this.state.counters.map(e => {
      e.value = 0;
      return e;
    });

    console.log(resetCounters);
    this.setState({ counters: resetCounters });
  };

  handleIncrement = id => {
    const incrementedCounters = this.state.counters.map(e => {
      e.id === id && e.value++;
      return e;
    });

    this.setState({ counters: incrementedCounters });
  };

  render() {
    console.log("APP Render");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <h1>Hi Welcome to my movie APP </h1>
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
