import React, { Fragment } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Paginas/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Nosotros from './Components/Paginas/Nosotros';
import Servicios from './Components/Paginas/Servicios';

const App = () => {
  return ( 
    <Router>
    <Fragment>
      <Header/>
      <Home/>
      <Footer/>
    </Fragment>
    </Router>

  );


}
 
export default App;