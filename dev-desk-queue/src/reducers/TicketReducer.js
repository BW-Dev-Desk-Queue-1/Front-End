import { FETCHING_ACTIVITY_START,
 FETCHING_ACTIVITY_SUCCESS,
FETCHING_ACTIVITY_FAILURE, POST_TICKET_SUCCESS, POST_TICKET_FAILURE, UPDATE_TICKET_SUCCESS} from '../actions/ticketActions';


const initialState = {
  loading: false,
  errors: null, 
  tickets: null,
  id: localStorage.getItem('userId')
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
    case POST_TICKET_FAILURE :
      return {
        ...state,
        loading: false, 
        errors: action.payload
      }
    case UPDATE_TICKET_SUCCESS :
    return {
      ...state,
      loading: false, 
      tickets: state.tickets.map(ticket => {
        if(ticket.id === action.payload.id) {
          return {...ticket, ...action.payload}
        }
        return ticket
      })
    }
    default :
      return state
  }
}

