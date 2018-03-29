import React from 'react';

const CarritoCompra = props => {
  let total = 0;
  return (
    <div style={{
      position: 'absolute',
      right: '50px',
      top: '1700px',
      width: '300px',
      padding: '10px',
      backgroundColor: '#E7F5F2',
    }}>
      <h4>Entradas</h4>
      <ul>
        {props.carrito.map((elemento) => {
          total = total + elemento.precio
          return (<li>{elemento.item}: {elemento.precio} soles</li>)
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
