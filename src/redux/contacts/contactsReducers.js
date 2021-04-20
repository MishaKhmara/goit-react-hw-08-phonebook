import { combineReducers } from 'redux';
import {
  GETCONTACTS,
  ADDCONTACT,
  DELETECONTACT,
  FILTERCONTACTS,
  // SETERROR,
  // RESETERROR,
  // SETLOADINGTRUE,
  // SETLOADINGFALSE,
} from './contactsConstants';

const contactsItem = (state = [], { type, payload }) => {
  switch (type) {
    case GETCONTACTS:
      return [...payload];

    case ADDCONTACT:
      return [...state, payload];

    case DELETECONTACT:
      return [...state.filter(contact => contact.id !== payload)];

    default:
      return state;
  }
};

const contactsFilter = (state = '', { type, payload }) => {
  switch (type) {
    case FILTERCONTACTS:
      return payload;

    default:
      return state;
  }
};

// const contactsError = (state = '', action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
// const contactsLoading = (state = false, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const contactsReducer = combineReducers({
  items: contactsItem,
  filter: contactsFilter,
  // error: contactsError,
  // loading: contactsLoading,
});

export default contactsReducer;
