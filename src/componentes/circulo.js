import React from "react";

const Circulo = props => {
  const selected = () => {
    // si existe el nivel y si la butaca esta en selected se pondra de color roja
    if (props.selected[props.nivel] && props.selected[props.nivel][props.butaca] === 'selected') {
      return 'red'
    }

    return '#E7E7DE'
  }

  return (
    <circle
    r="12"
    cx={props.cx}
    cy={props.cy}
    fill={selected()}
    onClick={() => props.onClick({
        nivel: props.nivel,
        butaca: props.butaca,
        precio: props.precio
      })}
    />
  )
};

export default Circulo;