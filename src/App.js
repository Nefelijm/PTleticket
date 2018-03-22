import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NivelUno from './container/nivelUno-container'
import Escenario from './componentes/escenario'
import Aside from './componentes/aside'
// const none = 'block';
import { Provider } from 'react-redux';
import store from './reducer/reducer';
import Header from './componentes/header.js'

const App =() => (
  <Provider store= {store}>
  <div>
  <Header/> 
  <Aside/>    
  <Escenario/>
  <NivelUno/>
  </div>
  </Provider>
)
export default App;
