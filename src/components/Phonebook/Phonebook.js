import { Component } from 'react';
import ContactsList from '../ContactsList/ContactsList';
import Form from '../Form/Form';
import css from './Phonebook.module.css';
import { v4 as uuidv4 } from 'uuid';
import FilterList from '../FilterList/FilterList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  GetContacts,
  addContact,
  deleteContact,
  filterContacts,
} from '../../redux/contacts/contactsAction';

class Phonebook extends Component {
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.props.GetContacts(parsedContacts);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  addContact = contact => {
    if (
      this.props.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }

    this.props.addContact({ id: uuidv4(), ...contact });
  };

  deleteContact = contactId => {
    this.props.deleteContact(contactId);
  };

  getFilteredContacts() {
    return this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase()),
    );
  }

  onFilterHandleChange = filter => {
    this.props.filterContacts(filter);
  };

  render() {
    const visibleContacts = this.getFilteredContacts();

    return (
      <div className={css.wraper}>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />
        <h2>Contacts</h2>
        <FilterList
          filter={this.props.filter}
          onFilterHandleChange={this.onFilterHandleChange}
        />

        <ContactsList
          contact={visibleContacts}
          ondeleteContact={this.deleteContact}
        ></ContactsList>
      </div>
    );
  }
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,

    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  GetContacts,
  addContact,
  deleteContact,
  filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
