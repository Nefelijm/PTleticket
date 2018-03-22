import React from 'react'
import ContainerCirculo from './containerCirculo'

const NivelUno = ({id}) =>{

    //ancho y color del rectangulo
    const width = [0,300,500, 566]
    const fill = [0,'red','yelow','blue']
   
    return(
    //coordenadas del rectangulo
     <svg
       x = {(200/id)}
       y = {150 * id}
     >
     <rect
      width = {width[id]}
      height="150"
      fill={fill[id]}
      />

   {/* Creamos contenedor para todo los circulos */}
      <ContainerCirculo />

     </svg>
    )
}
export default NivelUno