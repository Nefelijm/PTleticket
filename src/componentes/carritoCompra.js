import React from 'react';

const CarritoCompra = props => {
  let total = 0;
  return (
    <div style={{
      position: 'absolute',
      right: '100px',
      top: '10px',
      border: '1px solid grey',
      width: '200px',
      padding: '10px',
      backgroundColor: 'pink',
    }}>
      <h3>Carrito</h3>
      <ul>
        {props.carrito.map((elemento) => {
          total = total + elemento.precio
          return (<li>{elemento.item}: {elemento.precio}</li>)
        })}
      </ul>
      <hr/>
      Total: {total} soles
      <hr/>
      <button>
        Comprar
      </button>
    </div>
  );
}

export default CarritoCompra;
