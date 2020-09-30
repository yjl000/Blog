import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './view/clock/clock'
import Game from './view/game/index';
import Reservation from './view/form/form'

function App(props) {
  return (
    <div>
      <Game />
      <Clock />
      <Reservation />
    </div>
  )
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


