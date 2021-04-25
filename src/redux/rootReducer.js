import { combineReducers } from 'redux';
import phoneBookReducer from './contacts/contactsReducers';

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

export default rootReducer;
