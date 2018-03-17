// import Numero from '../componentes/Numero'
// import {connect} from 'react-redux';
// import  {increment} from '../accion/contador'
// import { bindActionCreators } from 'redux';

// function mapStateToProps(state) {
//     console.log('map');
//     return {
//          numero: state.number,
//     }
//   }

//   function mapDispatchToProps (dispatch){
//       console.log(increment);
//     return bindActionCreators({ onClick : increment}, dispatch)

//   }
  
//   export default connect(mapStateToProps,mapDispatchToProps)(Numero)

import Circulo from '../componentes/circulo'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
    return {
         none: state.display,
    }
  }
export default connect(mapStateToProps,null)(Circulo) 