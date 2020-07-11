// import redux from 'redux'
const redux = require('redux')//we are using simple nodeJS application instead of react, so we have to use require syntax instead of import syntax
const createStore = redux.createStore;

const BUY_CAKE = 'BUY_CAKE'

//action, action is an object with type property
//action creator is a function that returns an action
const buyCake = () =>{
  return {
    type:BUY_CAKE,
    info:'First redux action'
  }
}

//(currentState,action)=>newState

const initialState = {
  numOfCakes:10,
}

const reducer = (state=initialState,action) =>{
  switch(action.type){
    case BUY_CAKE:
      return{
        numOfCakes:state.numOfCakes-1
      }
    default:
      return state
  }
}

const store = createStore(reducer) //store holding the application state
console.log('inintial state: ',store.getState());
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()