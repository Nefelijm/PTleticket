import Circulo from '../componentes/circulo'
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
         none: state.display,
    }
  }
export default connect(mapStateToProps,null)(Circulo) 