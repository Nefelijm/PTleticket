import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { displayButacas, toggleButaca } from '../acciones/accion';
import NivelUno from '../componentes/nivel-uno';

const mapStateToProps = state => ({
  niveles: state.teatro.niveles,
  selected: state.teatro.selected
});

const mapDispatchToProps = (dispatch) => ({
  displayButacas: bindActionCreators(displayButacas, dispatch),
  toggleButaca: bindActionCreators(toggleButaca, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NivelUno);