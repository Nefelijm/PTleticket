//import {actionTypes} from './acciones/accion'
//Crearemos nuestro estado para poder pasar a nuestras componentes
const initialState = {
    niveles:{
        1: {
            
          display:'none', //Esta propiedad permitira poner un display none o block al componente que envuelve a los circulos (containerCirculo)
          butacas: 10,  //Cantidad de butacas que se creeran
          precio:20,
        },
        2: {
           display:'none',
           butacas: 15, 
           precio:15
        },
        3: {
           display:'none',
           butacas: 20,
           precio:10, 
        }

    },
    selected:{},//Este estado cambiara de acuerdo a las butacas que seleccionaremos
    carrito: [],
    displayModal:false,
    comprados:[]
    }



    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case 'DISPLAY_BUTACAS':
        
              return {
                ...state,
                niveles: {
                  ...state.niveles,
                  [action.payload]: {
                    ...state.niveles[action.payload],
                    display: 'block',
                  },
                }
              };
        
              case 'TOGGLE_BUTACA':
                if (state.selected[action.payload.nivel] && state.selected[action.payload.nivel][action.payload.butaca] === 'selected') {
                  return {
                    ...state,
                    selected: {
                      ...state.selected,
                      [action.payload.nivel]: {
                        ...state.selected[action.payload.nivel],
                        [action.payload.butaca]: 'noselected'
                      }
                    },
                    carrito: state.carrito.filter((elemento) => elemento.id !== `${action.payload.nivel}_${action.payload.butaca}`)
                };
                }
        
                return {
                  ...state,
                  selected: {
                    ...state.selected,
                    [action.payload.nivel]: {
                      ...state.selected[action.payload.nivel],
                      [action.payload.butaca]: 'selected'
                    }
                  },
                  carrito: [
                    ...state.carrito,
                    {
                      id: `${action.payload.nivel}_${action.payload.butaca}`,
                      item: `Butaca ${action.payload.butaca} del nivel ${action.payload.nivel}`,
                      precio: action.payload.precio
                    },
                  ]
                  
                };
            case 'COMPRAR':
              return{
                ...state,
                displayModal:true,
                comprados:state.carrito,
                carrito:[],
                selected:{}
              }

             case 'FINALIZAR':
             return{
               ... state,
               displayModal:false,
               comprados:[]
             } 

            default:
              return state;
          }
        }
        
        export default reducer