const DISPLAY_BUTACAS = 'DISPLAY_BUTACAS';
const TOGGLE_BUTACA = 'TOGGLE_BUTACA';
const COMPRAR = 'COMPRAR';

export const displayButacas = payload => ({ type: DISPLAY_BUTACAS, payload });
export const toggleButaca = payload => ({ type: TOGGLE_BUTACA, payload });
export const comprar = payload => ({ type: COMPRAR, payload });


