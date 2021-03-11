import React, { Fragment } from 'react';
import Header from './Components/Header';
import Home from './Components/Paginas/Home';
import Footer from './Components/Footer';
import Nosotros from './Components/Paginas/Nosotros';
import Servicios from './Components/Paginas/Servicios';
import Precios from './Components/Paginas/Servicios';
import { Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return ( 
    <Fragment>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/nosotros'>
          <Nosotros/>
        </Route>
        <Route exact path='/servicios'>
          <Servicios/>
        </Route>
        <Route exact path='/precios'>
          <Precios/>
        </Route>
      </Switch>
      <Footer/>
    </Fragment>
  );
}
 
export default App;