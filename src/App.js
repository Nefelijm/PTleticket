import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NivelUno from './container/nivelUno-container'
import NivelDos from './container/nivelDos-container'
import NivelTres from './container/nivelTres-container'
import Escenario from './componentes/escenario'
import Aside from './componentes/aside'
// const none = 'block';
import { Provider } from 'react-redux';
import store from './reducer/reducer';

const App =() => (
  <Provider store= {store}>
  <div>
  <Aside/>    
  <Escenario/>
  <NivelUno/>
  <NivelDos/>
  <NivelTres/>

  </div>
  </Provider>
)
export default App;
