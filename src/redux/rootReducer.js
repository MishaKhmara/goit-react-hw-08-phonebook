import { combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
