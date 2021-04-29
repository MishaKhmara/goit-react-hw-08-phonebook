import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsList from '../ContactsList/ContactsList';
import Form from '../Form/Form';

import FilterList from '../FilterList/FilterList';
import css from './Phonebook.module.css';

import { getLoading } from '../../redux/contacts/contactSelector';
import Loader from '../Loader/Loader';

import { fetchNumbers } from '../../redux/contacts/contactsOperations';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchNumbers());
  }, [dispatch]);

  return (
    <div className={css.wraper}>
      <h1>Phonebook</h1>
      <Form />
      {!isLoading ? (
        <>
          <h2> Contacts </h2>
          <FilterList />
          <ContactsList />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
