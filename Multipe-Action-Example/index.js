const redux = require('redux')
const createStore = redux.createStore

//Action

const initialState = {
    numOfBooks: 10,
    numOfPens: 20
}

function buyBook(){
    return{
        type: "Buy_Book",
        payload: "My first action"
    }
}

function buyPen(){
    return{
        type: "Buy_Pen",
        payload: "My Second Action"
    }
}

//REDUCER
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "Buy_Book": return{
            ...state,
            numOfBooks: state.numOfBooks - 1
        }

        case "Buy_Pen": return{
            ...state,
            numOfPens: state.numOfPens - 2
        }

        default: return state;
    }
}

//STORE
const store = createStore(reducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>{console.log("Updated value: ", store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyBook());
unsubscribe();
