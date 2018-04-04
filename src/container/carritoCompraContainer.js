import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {comprar,finalizar} from '../acciones/accion';
import CarritoCompra from './../componentes/carritoCompra';

const mapStateToProps = state => ({
    carrito: state.reducer.carrito,
    comprados: state.reducer.comprados,
    displayModal : state.reducer.displayModal
  });
  
  const mapDispatchToProps = (dispatch) => ({
    comprar: bindActionCreators(comprar, dispatch),
    finalizarCompra : bindActionCreators(finalizar,dispatch)
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(CarritoCompra);