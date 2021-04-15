const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//ACTION CREATOR
function buy_cake(){
    return{
        type: BUY_CAKE,
        info: "first redux action"
    }
}

function buy_icecream(){
    return{
        type: BUY_ICECREAM,
        info: "redux action"
    }
}

//REDUCER
/*const initialState = {
    numOfCakes = 10,
    numOfIcecreams = 20
}*/

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
    numOfIcecreams: 20
}

/*const reducer = (state= initialState, action) => {
    switch(action.type){
        case BUY-CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY-ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}*/

const cakeReducer = (state= initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const icecreamReducer = (state= initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }
        default: return state
    }
}

//STORE

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
unsubscribe()