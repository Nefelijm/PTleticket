import React from 'react'
import './cuadro.css'
import Circulo from '../container/circulo-container'
const Cuadro = ({onClick}) =>(
    <svg>
       <rect x="300" y="50" width="500" height="300" fill="red" onClick={onClick}/>
       <Circulo/>
    </svg>
)

export default Cuadro