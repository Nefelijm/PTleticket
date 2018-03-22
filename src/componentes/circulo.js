import React from "react";

const Circulo = props => {
  const selected = () => {
    // si existe el nivel y si la butaca esta en selected se pondra de color roja
    if (props.selected[props.nivel] && props.selected[props.nivel][props.butaca] === 'selected') {
      return 'red'
    }

    return 'grey'
  }

  return (
    <circle
    r="12"
    cx={props.cx}
    cy={props.cy}
    fill={selected()}
    />
  )
};

export default Circulo;