const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

//STATE
const initialState = {
    loading: false,
    users: [],
    error: ''
}

//ACTION CREATOR
const FETCH_USERS_REQ = 'FETCH_USERS_REQ'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

const fetchUserReq = () =>{
    return{
        type: 'FETCH_USERS_REQ'
    }
}

const fetchUserSuccess = (users) =>{
    return{
        type: 'FETCH_USERS_SUCCESS',
        payload: users
    }
}

const fetchUserError = (error) =>{
    return{
        type: 'FETCH_USERS_ERROR',
        payload: error
    }
}

//REDUCER

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "FETCH_USERS_REQ": return{
            ...state,
            loading: true
        }

        case "FETCH_USERS_SUCCESS": return{
            loading: false,
            users: action.payload,
            error: ''
        }

        case "FETCH_USERS_ERROR": return{
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUserReq())
        axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response =>{
            // response.data
            const users = response.data.map(user => user.id | user.name)
            dispatch(fetchUserSuccess(users))
         })
         .catch(error =>{
            // error.message
            dispatch(fetchUserError(error.message))
         })
    }
}

//STORE

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() =>{ console.log(store.getState())})
store.dispatch(fetchUsers())

