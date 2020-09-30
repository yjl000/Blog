import React from 'react';
import './clock.css';


function Clock (props) {
  return (
    <div>
      <Tick />
    </div>
  )
}

class Tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.setTick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  setTick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
  
}

export default Clock;