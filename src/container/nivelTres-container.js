import NivelTres from '../componentes/nivel-tres'
import {connect} from 'react-redux';
import  {display} from '../acciones/accion'
import { bindActionCreators } from 'redux';

  function mapDispatchToProps (dispatch){
      console.log(display)
    return bindActionCreators({ onClick : display}, dispatch)

  }

  export default connect(null,mapDispatchToProps)(NivelTres)