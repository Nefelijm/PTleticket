import React from "react";

const Circulo = props => {
  return (
    <circle
      r="12"
      cx={props.cx}
      cy={props.cy}
      fill="pink"
    />
  )
};

export default Circulo;