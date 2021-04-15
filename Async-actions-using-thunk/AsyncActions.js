const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

//ACTION
const FETCH_USERS_REQ = 'FETCH_USERS_REQ'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//ACTION-CREATOR
const fetchUsersReq = () => {
    return{
        type: FETCH_USERS_REQ
    }
}

const fetchUsersSuccess = users => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//REDUCER
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQ: return{
            ...state,
            loading: true
        }
        
        case FETCH_USERS_SUCCESS: return{
            loading: failure,
            users: action.payload,
            error: ''
        }

        case FETCH_USERS_FAILURE: return{
            loading: failure,
            users: '',
            error: action.payload
        }
    }
}

const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersReq())
        axios.get('https://jsonplaceholder.typicode.com/users')
           .then(response =>{
                const users = response.data.map(user => user.id, us)
                dispatch(fetchUsersSuccess(users))
           })
           .catch(error => {
                dispatch(fetchUsersFailure(error.message))
           })
    } 
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() =>{ console.log(store.getState())})
store.dispatch(fetchUsers())