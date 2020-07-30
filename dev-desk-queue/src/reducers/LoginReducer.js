import {USER_LOGIN_START, USER_LOGIN_SUCCESS ,USER_LOGIN_ERROR} from '../actions/loginActions'

const initialState = {
  loggingIn: false,
  user: null, 
  error: null
}

export const LoginReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case USER_LOGIN_START :
      return {
        ...state,
        loggingIn: true
      }
    case USER_LOGIN_SUCCESS :
      return {
        ...state,
        loggingIn: false,
        user: payload
      }
    case USER_LOGIN_ERROR :
      return {
        ...state,
        loggingIn: false,
        error: payload
      }
    default :
      return state
  }
}

