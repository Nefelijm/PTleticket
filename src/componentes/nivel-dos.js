import React from 'react'
import './nivel-dos.css'
import Circulo from '../container/circulo-container'
const coordernadaX = []
const coordernadaY = []
let inicioX = 400
let inicioY = 300
for (var i =0;i<10;i++){
   coordernadaX[i] = inicioX.toString()
   coordernadaY[i] = inicioY.toString()
   inicioX = inicioX +50
   inicioY = inicioY
   if(i>3){
       inicioY = 350
   }
   
   if(i===4){
     inicioX = 400
   }
}

const NivelDos = ({onClick}) =>{
    const row = []
   for(var j=0; j<10; j++){
    row.push(<Circulo key = {j} y={coordernadaY[j]} x ={coordernadaX[j]}/>)
   }
    return(
        <svg>
         <rect x="150" y="230" width="500" height="170" fill="#00587A" onClick={onClick}/>
         {row}
        </svg>
    )
}
export default NivelDos