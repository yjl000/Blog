import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './view/clock/clock'
import Game from './view/game/index';
import Reservation from './view/form/form';
import Boil from './view/boil/boil';
import { Facebook } from "react-content-loader";
import SignUpDialog from './view/combination/index'

const MyFacebookLoader = () => <Facebook />
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isMounted: false}
  }
  
  render() {
    let loader;
    if (!this.state.isMounted) {
      loader = <div>
                  <MyFacebookLoader />
                </div>
    } else {
      loader = <div>
                <Game />
                <Clock />
                <Reservation />
                <Boil />
                <SignUpDialog />
              </div>
    }
    setTimeout(() => {
      this.setState({
        isMounted: true
      })
    }, 3000);
    return (
      <div>
        {loader}
      </div>
      
    )
  }
  
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


