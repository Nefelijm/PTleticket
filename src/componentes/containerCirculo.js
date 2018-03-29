import React from "react";
import Circulo from './circulo';

const ContainerCirculo = props => {
  return (
  // <g> agrupa los elementos sgv como un div
  <g display={props.display}>
    {/* convierte un numero en un array , para utilizar el map, butaca es igual a index */}
    {[...Array(props.elements)].map((element, butaca) => {

     //coordenadas del eje x , y de cada circulo
     const cy = (parseInt(butaca / props.colsPerRow, 10) + 1) * 50
     const cx = ((butaca % props.colsPerRow) + 1) * 50

      return (
        <Circulo
        // le pasa las coordenadas al componente Circulo
          cx={cx}
          cy={cy}
          precio={props.precio}
          selected={props.selected} //select sirve para seleccionar las butacas bien seran red o gray
          nivel={props.nivel} //para indicar en que nivel esta
          butaca={butaca} //para indicar el numero de butaca
          key={`${props.nivel}_${butaca}`} //key es el numero + el numero de butaca ejem:1_2
          onClick={props.onClick}
        />
      )}
    )}
  </g>
)};

export default ContainerCirculo;