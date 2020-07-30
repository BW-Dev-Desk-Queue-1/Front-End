import { FETCHING_ACTIVITY_START,
 FETCHING_ACTIVITY_SUCCESS,
FETCHING_ACTIVITY_FAILURE, POST_TICKET_SUCCESS, POST_TICKET_FAILURE, UPDATE_TICKET_SUCCESS, HELPER_ASSIGN_TICKET} from '../actions/ticketActions';


const initialState = {
  loading: false,
  errors: null, 
  tickets: null,
  id: localStorage.getItem('userId')
}

export const TicketReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case FETCHING_ACTIVITY_START: 
      return {
        ...state,
        loading: true
      }
    case FETCHING_ACTIVITY_SUCCESS: 
      return {
        ...state,
        loading: false,
        tickets: payload
      }
    case FETCHING_ACTIVITY_FAILURE: 
      return {
        ...state,
        loading: false,
        errors: payload
      }
    case POST_TICKET_SUCCESS: 
      return {
        ...state,
        loading: false,
        tickets: [...state.tickets, payload]
      }
    case POST_TICKET_FAILURE :
      return {
        ...state,
        loading: false, 
        errors: payload
      }
    case UPDATE_TICKET_SUCCESS :
      return {
        ...state,
        loading: false, 
        tickets: state.tickets.map(
          ticket => ticket.id === payload.id ? {...ticket, ...payload} : ticket
      )
    }
    case HELPER_ASSIGN_TICKET :
      return {
        ...state,
        tickets: state.tickets.map(
          ticket => ticket.id === payload.id ? {...ticket, ...payload} : ticket
      )
        
      }
    
    default :
      return state
  }
}

