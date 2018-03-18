import React from 'react'
import './nivel-uno.css'
import Circulo from '../container/circulo-container'
// const asientos = [1,2,3,4,5,6,7,8,9,10]
// const x = ['400','450','500','550','600','400','450','500','550','600']
// const y = ['300','300','300','300','300','350','350','350','350','350']
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

const NivelUno = ({onClick}) =>{
    const row = []
   for(var j=0; j<10; j++){
    row.push(<Circulo key = {j} y={coordernadaY[j]} x ={coordernadaX[j]}/>)
   }
    return(
        <svg>
         <rect x="300" y="210" width="400" height="220" fill="#232855" onClick={onClick}/>
         {row}
        </svg>
    )
}
export default NivelUno