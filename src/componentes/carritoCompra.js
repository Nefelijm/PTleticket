import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const CarritoCompra = props => {
  let total = 0;
  let totalComprado = 0;

  const realizarCompra = ()=> {
    if(props.carrito.length === 0){
      return false;
    }
    return props.comprar();
  }
  return (
    <div style={{
      position: 'absolute',
      right: '50px',
      top: '1400px',
      width: '300px',
      padding: '10px',
      backgroundColor: '#BCFFA8',
    }}>

      <Modal isOpen={props.displayModal} toggle={() => props.finalizarCompra()}>
        <ModalHeader>Compra realizada con éxito</ModalHeader>
        <ModalBody>
          <p>Ha comprado satisfactoriamente los boletos para las butacas:</p>
          <ul>
            {props.comprados.map((elemento) => {
              totalComprado = totalComprado + elemento.precio
              return (<li>{elemento.item}, precio: {elemento.precio} soles</li>)
            })}
          </ul>
          <hr />
          Total: {totalComprado} soles
       </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.finalizarCompra()}>Aceptar</Button>
        </ModalFooter>
      </Modal>

      <h4>Entradas</h4>
      <ul>
        {props.carrito.map((elemento) => {
          total = total + elemento.precio
          return (<li>{elemento.item}: {elemento.precio} soles</li>)
        })}
      </ul>
      <hr />
      Total: {total} soles
      <hr />
      <Button color='primary' disabled={props.carrito.length === 0} onClick ={()=>realizarCompra()}>Comprar</Button>
    </div>
  );
}

export default CarritoCompra;
