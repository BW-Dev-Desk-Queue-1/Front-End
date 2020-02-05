import {USER_LOGIN_START, USER_LOGIN_SUCCESS ,USER_LOGIN_ERROR} from '../actions/loginActions'

const initialState = {
  loggingIn: false,
  user: null, 
  error: null
}

export const LoginReducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_START :
      return {
        ...state,
        loggingIn: true
      }
    case USER_LOGIN_SUCCESS :
      return {
        ...state,
        loggingIn: false,
        user: action.payload
      }
    case USER_LOGIN_ERROR :
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      }
    default :
      return state
  }
}

