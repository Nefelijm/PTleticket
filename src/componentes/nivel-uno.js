import React from 'react'
import ContainerCirculo from './containerCirculo'

const NivelUno = props =>{

    //ancho y color del rectangulo
    const width = [0,300,500, 566]
    const fill = [0,'red','yelow','blue']
   
    return(
    //coordenadas del rectangulo
     <svg
       x = {(200/props.id)}
       y = {150 * props.id}
     >
     <rect
      width = {width[props.id]}
      height="150"
      fill={fill[props.id]}
      />

   {/* Creamos contenedor para todo los circulos */}
      <ContainerCirculo 
        selected={props.selected}//propiedad estado
        nivel={props.id}//cuantos niveles habra
        display={props.niveles[props.id].display}//para indicar none o block
        elements={props.niveles[props.id].butacas}//para pintar la cantidad de butacas
        colsPerRow={parseInt(props.niveles[props.id].butacas, 10)/2}
        />    
        </svg>
    )
}
export default NivelUno