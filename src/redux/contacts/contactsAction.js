import {
  GETCONTACTS,
  ADDCONTACT,
  DELETECONTACT,
  // EDITCONTACT,
  FILTERCONTACTS,
  // SETERROR,
  // RESETERROR,
  // SETLOADINGTRUE,
  // SETLOADINGFALSE,
} from './contactsConstants';

const GetContacts = contacts => {
  return {
    type: GETCONTACTS,
    payload: contacts,
  };
};

const addContact = contact => {
  return {
    type: ADDCONTACT,
    payload: contact,
  };
};

const deleteContact = id => {
  return {
    type: DELETECONTACT,
    payload: id,
  };
};

// const editContact = contact => {
//   return {
//     type: EDITCONTACT,
//     payload: contact,
//   };
// };

const filterContacts = value => {
  return {
    type: FILTERCONTACTS,
    payload: value,
  };
};

// const setEroorContact = error => {
//   return {
//     type: SETERROR,
//     payload: error,
//   };
// };

// const resetEroorContact = () => {
//   return {
//     type: RESETERROR,
//   };
// };

// const setLoadingContactTrue = () => {
//   return {
//     type: SETLOADINGTRUE,
//   };
// };

// const setLoadingContactFalse = () => {
//   return {
//     type: SETLOADINGFALSE,
//   };
// };

export {
  GetContacts,
  addContact,
  deleteContact,
  filterContacts,
  // setEroorContact,
  // resetEroorContact,
  // setLoadingContactTrue,
  // setLoadingContactFalse,
};
