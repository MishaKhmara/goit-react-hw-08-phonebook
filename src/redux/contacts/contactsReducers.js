import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  filterContacts,
  GetContacts,
} from './contactsAction';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsItem = createReducer(initialState, {
  [GetContacts]: (_, { payload }) => [...payload],
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const contactsFilter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});
////////////////Redux////////////////////////////////

// const contactsItem = (state = [], { type, payload }) => {
//   switch (type) {
//     case GETCONTACTS:
//       return [...payload];

//     case ADDCONTACT:
//       return [...state, payload];

//     case DELETECONTACT:
//       return [...state.filter(contact => contact.id !== payload)];

//     default:
//       return state;
//   }
// };

// const contactsFilter = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTERCONTACTS:
//       return payload;

//     default:
//       return state;
//   }
// };

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
