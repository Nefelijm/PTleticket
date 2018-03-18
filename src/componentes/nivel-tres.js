import React from 'react'
import './nivel-tres.css'
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

const NivelTres = ({onClick}) =>{
    const row = []
   for(var j=0; j<10; j++){
    row.push(<Circulo key = {j} y={coordernadaY[j]} x ={coordernadaX[j]}/>)
   }
    return(
        <svg>
         <rect x="100" y="400" width="600" height="180" fill="#008891" onClick={onClick}/>
         {row}
        </svg>
    )
}
export default NivelTres