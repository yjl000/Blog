import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo1 from './index_demo1';
import Demo2 from './index_state-demo';
import Demo3 from './index_return_func_demo';
import Unicafe from './unicafe'
import Anecdotes from './anecdotes'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setTozero = () => setCounter(0)
  return (
    <div>
      <Display counter={counter}></Display>
      <Button handleClick={increaseByOne} text='plus'/>
      <Button handleClick={setTozero} text='zero'/>
      <Button handleClick={decreaseByOne} text='minus'/>
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <br /><br />
      <Unicafe />
      <br />
      <br />
      <Anecdotes />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
