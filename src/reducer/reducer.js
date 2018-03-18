import {createStore } from 'redux';


const initialState = {
  display: 'none'
};

const reducerCounter = (state = initialState, action)=> {

  switch(action.type){
    case 'DISPLAY' : 
    console.log('uno');
    return Object.assign({}, state, {
        display:'block'})
    case 'PRUEBA':
    console.log('dos')
    
    default :
    return state;
    console.log('yo');
  }
}

const store = createStore(reducerCounter); 

export default store;
