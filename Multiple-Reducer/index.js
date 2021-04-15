const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

//Action

const initialStateOfBooks = {
    numOfBooks: 10,
}

const initialStateOfPens = {
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

const booksReducer = (state = initialStateOfBooks, action) =>{
    switch(action.type){
        case "Buy_Book": return{
            ...state,
            numOfBooks: state.numOfBooks - 1
        }

        default: return state;
    }
}

const pensReducer = (state = initialStateOfPens, action) =>{
    switch(action.type){
        case "Buy_Pen": return{
            ...state,
            numOfPens: state.numOfPens - 2
        }

        default: return state;
    }
}

//STORE

const rootReducer = combineReducers({
    Book: booksReducer,
    Pen: pensReducer
}) 

const store = createStore(rootReducer);
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() =>{console.log("Updated value: ", store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyBook());
unsubscribe();
