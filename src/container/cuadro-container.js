import Cuadrado from '../componentes/cuadro'
import {connect} from 'react-redux';
import  {display} from '../acciones/accion'
import { bindActionCreators } from 'redux';

  function mapDispatchToProps (dispatch){
    return bindActionCreators({ onClick : display}, dispatch)

  }

  export default connect(null,mapDispatchToProps)(Cuadrado)