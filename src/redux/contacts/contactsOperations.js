import axios from 'axios';
import {
  fetchNumbersRequested,
  fetchNumbersSuccess,
  fetchNumbersFailure,
  addNumberRequested,
  addNumberSuccess,
  addNumberFailure,
  removeNumberRequested,
  removeNumberSuccess,
  removeNumberFailure,
} from './contactsAction';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchNumbers = () => async dispatch => {
  dispatch(fetchNumbersRequested());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchNumbersSuccess(data));
  } catch (error) {
    dispatch(fetchNumbersFailure(error));
  }
};

const deleteNumber = contactId => async dispatch => {
  dispatch(removeNumberRequested());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(removeNumberSuccess(contactId));
  } catch (error) {
    dispatch(removeNumberFailure(error));
  }
};

const addNumber = contact => async dispatch => {
  dispatch(addNumberRequested());
  try {
    const { data } = await axios.post(`/contacts`, contact);

    dispatch(addNumberSuccess(data));
  } catch (error) {
    dispatch(addNumberFailure(error));
  }
};

export { fetchNumbers, deleteNumber, addNumber };
