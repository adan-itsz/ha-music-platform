import React,{Component} from 'react'
import {Route, BrowserRouter, Link, Redirect, Switch,Router} from 'react-router-dom'
import HomepageLayout from './componentes/nav.js';



class RouterPrincipal extends Component {
  state = {
    authed: false,
    loading: true,
  }


  render() {

    return (
      <BrowserRouter>

          <div>
            <Route path='/' exact component={HomepageLayout} />


            <Route render={() => <h3>Uups! algo paso mal :D</h3>} />
          </div>

  </BrowserRouter>


    );
  }
}

export default RouterPrincipal;
