import React,{Component} from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import HomepageLayout from './componentes/nav.js';
import Biografia from './componentes/Biografia.js';
import Cursos from './componentes/Cursos.js';
import Eventos from './componentes/Eventos.js';




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
          <Route path='/biografia' component={Biografia}/>
          <Route path='/media' component={HomepageLayout}/>
          <Route path='/cursos' component={Cursos}/>
          <Route path='/eventos' component={Eventos}/>
          <Route path='/media/albums' component={Eventos}/>
          <Route path='/media/videos' component={Eventos}/>
          <Route path='/media/libros' component={Eventos}/>
          <Route path='/media/articulos' component={Eventos}/>
          <Route path='/media/transcripciones' component={Eventos}/>



        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterPrincipal;
