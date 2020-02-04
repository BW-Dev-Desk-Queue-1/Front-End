import { FETCHING_ACTIVITY_START,
 FETCHING_ACTIVITY_SUCCESS,
FETCHING_ACTIVITY_FAILURE, POST_TICKET_SUCCESS, POST_TICKET_FAILURE} from '../actions/ticketActions';


const initialState = {
  loading: false,
  errors: null,
  // id: "",
  // username: "",
  // password: "",
  // accessType: "",
  tickets: null
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
        errors: action.payload

      }
      case POST_TICKET_SUCCESS: 
      return {
        ...state,
        loading: false,
        tickets: [...state.tickets, action.payload]

      }
    default :
      return state
  }
}

