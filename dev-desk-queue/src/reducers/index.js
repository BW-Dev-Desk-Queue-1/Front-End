import { combineReducers } from 'redux';

import { LoginReducer } from "./LoginReducer";
import { TicketReducer } from "./TicketReducer";

export const rootReducer = combineReducers({
  LoginReducer,
  TicketReducer
})




