import React,{Component} from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import HomepageLayout from './componentes/nav.js';



class RouterPrincipal extends Component {
  state = {
    authed: false,
    loading: true,
  }


  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomepageLayout}/>
          <Route path='/biografia' component={HomepageLayout}/>
          <Route path='/media' component={HomepageLayout}/>
          <Route path='/cursos' component={HomepageLayout}/>
          <Route path='/eventos' component={HomepageLayout}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterPrincipal;
