import { createAction } from '@reduxjs/toolkit';

// const addNumber = createAction('number/addNumber', number => ({
//   payload: { ...number, id: nanoid() },
// }));

// const deleteNumber = createAction('number/deleteNumber');
const filteredNumber = createAction('contacts/filteredNumber');

//getAll
const fetchNumbersRequested = createAction('contacts/fetch-numbers-requested');
const fetchNumbersSuccess = createAction('contacts/fetch-numbers-success');
const fetchNumbersFailure = createAction('contacts/fetch-numbers-failure');

//add
const addNumberRequested = createAction('contacts/add-number-requested');
const addNumberSuccess = createAction('contacts/add-number-success');
const addNumberFailure = createAction('contacts/add-number-failure');

//remove
const removeNumberRequested = createAction('contacts/remove-number-requested');
const removeNumberSuccess = createAction('contacts/remove-number-success');
const removeNumberFailure = createAction('contacts/remove-number-failure');

export {
  // addNumber,
  // deleteNumber,
  filteredNumber,
  fetchNumbersRequested,
  fetchNumbersSuccess,
  fetchNumbersFailure,
  addNumberRequested,
  addNumberSuccess,
  addNumberFailure,
  removeNumberRequested,
  removeNumberSuccess,
  removeNumberFailure,
};
