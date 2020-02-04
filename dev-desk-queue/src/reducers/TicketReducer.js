import { FETCHING_ACTIVITY_START,
 FETCHING_ACTIVITY_SUCCESS,
FETCHING_ACTIVITY_FAILURE } from '../actions/ticketActions';


const initialState = {
  loading: false,
  errors: null,
  // id: "",
  // username: "",
  // password: "",
  // accessType: "",
  tickets: []
}

export const TicketReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_ACTIVITY_START: 
      return {
        ...state,
        loading: true
      }
      case FETCHING_ACTIVITY_SUCCESS: 
      return {
        ...state,
        loading: false,
        tickets: action.payload

      }
      case FETCHING_ACTIVITY_FAILURE: 
      return {
        ...state,
        loading: false,
        erros: action.payload

      }
    default :
      return state
  }
}

