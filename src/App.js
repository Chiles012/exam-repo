import React, { Fragment } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Paginas/Home';

import './App.css';

const App = () => {
  return ( 
    <Fragment>
      <Header/>
      <Home/>
      <Footer/>
    </Fragment>
  );
}
 
export default App;