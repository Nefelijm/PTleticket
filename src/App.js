import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cuadro from './container/cuadro-container'
// const none = 'block';
import { Provider } from 'react-redux';
import store from './reducer/reducer';

const App =() => (
  <Provider store= {store}>
  <Cuadro/>
  </Provider>
)
export default App;
