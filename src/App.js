import React from 'react';
import logo from './logo.svg';
import './App.css';
import NivelUno from './componentes/nivel-uno'
import Escenario from './componentes/escenario'
import Aside from './componentes/aside'
import Header from './componentes/header.js'

const App =() => (
    <div>
       <Header/> 
       <Aside/>
       <svg className="svg">
          <Escenario/>
          <NivelUno id={1}/>
       </svg> 

    </div>

)
export default App;
