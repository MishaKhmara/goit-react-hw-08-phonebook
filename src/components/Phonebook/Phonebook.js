import { Component } from 'react';
import { connect } from 'react-redux';
import ContactsList from '../ContactsList/ContactsList';
import Form from '../Form/Form';

import FilterList from '../FilterList/FilterList';
import css from './Phonebook.module.css';

import { getLoading } from '../../redux/contacts/contactSelector';
import Loader from '../Loader/Loader';

import { fetchNumbers } from '../../redux/contacts/contactsOperations';

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchNumbers();
  }

  render() {
    return (
      <div className={css.wraper}>
        <h1>Phonebook</h1>
        <Form />
        {!this.props.isLoading ? (
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
}

const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = {
  fetchNumbers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
