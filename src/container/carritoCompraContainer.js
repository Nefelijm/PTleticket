import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {comprar} from '../acciones/accion';
import CarritoCompra from './../componentes/carritoCompra';

const mapStateToProps = state => ({
    carrito: state.reducer.carrito
  });
  
  const mapDispatchToProps = (dispatch) => ({
    comprar: bindActionCreators(comprar, dispatch),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(CarritoCompra);