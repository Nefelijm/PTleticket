import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NivelUno from './container/nivelUno-container'
import Escenario from './componentes/escenario'
// const none = 'block';
import { Provider } from 'react-redux';
import store from './reducer/reducer';

const App =() => (
  <Provider store= {store}>
  <div>
  <Escenario/>
  <NivelUno/>
  </div>
  </Provider>
)
export default App;
