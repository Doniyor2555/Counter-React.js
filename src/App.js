import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    }
  }

  onIncrement = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }

  onDecrement = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }))
  }

  onRandom = () => {
    this.setState(() => ({
      counter:  Math.round(Math.random() * 50)
    }))
  }

  onReset = () => {
    this.setState(state => ({
      counter: state.counter = 0
    }))
  }

  render() {
    const {counter} = this.state;
    return (
      <div className="root">
        <div className="counter">{counter}</div>
          <div className="controls">
            <button onClick={this.onIncrement}>INC</button>
            <button onClick={this.onDecrement}>DEC</button>
            <button onClick={this.onRandom}>RND</button>
            <button onClick={this.onReset}>RESET</button>
          </div>
      </div>
    );
  }
}

export default App;
