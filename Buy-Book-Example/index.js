const redux = require('redux');
const createStore = redux.createStore
//ACTION
const Buy_Book = 'Buy_Book'

const initialState = {
    numOfBooks: 10
}

function buyBook(){
    return {
        type: Buy_Book,
        info: 'First React Code'
    }
}

//REDUCER
const reducer = (state= initialState, action) =>{
    switch(action.type){
        case "Buy_Book": return{
            ...state,
            numOfBooks: state.numOfBooks - 1
        }
        default: return state;
    }
}

//STORE
const store = createStore(reducer);
console.log("Initial value: ", store.getState());
const unsubscribe = store.subscribe(() =>{
    console.log("Updated State Value: ", store.getState())
})
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
unsubscribe();
