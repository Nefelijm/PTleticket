//Crearemos nuestro estado para poder pasar a nuestras componentes
const initialState = {
    niveles:{
        1: {
          display:'none', //Esta propiedad permitira poner un display none o block al componente que envuelve a los circulos (containerCirculo)
          butacas: 10,  //Cantidad de butacas que se creeran
        },
        2: {
           display:'none',
           butacas: 15, 
        },
        3: {
           display:'none',
           butacas: 20, 
        }

    },
    selected:{}//Este estado cambiara de acuerdo a las butacas que seleccionaremos
    
    }