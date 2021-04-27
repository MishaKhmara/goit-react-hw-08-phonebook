import { Component } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import css from '../Phonebook/Phonebook.module.css';
import { connect } from 'react-redux';
import { addNumber } from '../../redux/contacts/contactsOperations';

const initialState = {
  name: '',
  number: '',
};
class Form extends Component {
  state = { ...initialState };

  onHandleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addContact = contact => {
    if (
      this.props.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }

    this.props.addNumber({ id: nanoid(), ...contact });
  };
  onHandleSubmit = event => {
    event.preventDefault();
    this.addContact(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            value={name}
            onChange={this.onHandleChange}
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
            onChange={this.onHandleChange}
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
}
const mapStateToProps = state => ({
  contacts: state.contacts.contactList,
});
const mapDispatchToProps = { addNumber };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
