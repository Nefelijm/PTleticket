import React from "react";
import Circulo from './circulo';

const ContainerCirculo = props => {
  return (
  // <g> agrupa los elementos sgv como un div
  <g>
    {/* convierte un numero en un array , para utilizar el map, butaca es igual a index */}
    {[...Array(10)].map((element, butaca) => {

     //coordenadas del eje x , y de cada circulo
      const cy = (parseInt(butaca /5, 10) + 1) * 50
      const cx = ((butaca % 5) + 1) * 50

      return (
        <Circulo
        // le pasa las coordenadas al componente Circulo
          cx={cx}
          cy={cy}
        />
      )}
    )}
  </g>
)};

export default ContainerCirculo;