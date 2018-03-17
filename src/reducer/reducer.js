import {createStore } from 'redux';


const initialState = {
  display: 'none'
};

const reducerCounter = (state = initialState, action)=> {

  switch(action.type){
    case 'DISPLAY' : 
    console.log(state.display);
    return Object.assign({}, state, {
        display:'block'})
    default :
    return state;
    // console.log('yo');
  }
}

const store = createStore(reducerCounter); 

export default store;
