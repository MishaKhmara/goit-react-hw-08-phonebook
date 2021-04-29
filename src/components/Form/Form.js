import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import css from '../Phonebook/Phonebook.module.css';

import { addNumber } from '../../redux/contacts/contactsOperations';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contactList);

  const updateName = e => {
    setName(e.target.value);
  };
  const updateNumber = e => {
    setNumber(e.target.value);
  };

  const addContact = contact => {
    if (
      contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }
    dispatch(addNumber({ id: nanoid(), ...contact }));
  };
  const onHandleSubmit = event => {
    event.preventDefault();
    const reset = () => {
      setName('');
      setNumber('');
    };
    addContact({ name, number });
    setNumber(number);
    setName(name);
    reset();
  };

  return (
    <form onSubmit={onHandleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          value={name}
          onChange={updateName}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={updateNumber}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
