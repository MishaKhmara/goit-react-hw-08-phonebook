import css from './ContactList.module.css';
import { connect } from 'react-redux';
import { deleteNumber } from '../../redux/contacts/contactsOperations';
import { getFilteredNumbers } from '../../redux/contacts/contactSelector';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as Delete } from '../../img/iconlitter.svg';

const ContactsList = ({ contactList, onHandleRemove }) => {
  const contactDelete = onHandleRemove;
  return (
    <ul className={css.phoneList}>
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={css.ContactsList}>
          <p className={css.name}>{name}:</p>
          <p className={css.number}>{number}</p>
          <IconButton onClick={() => contactDelete(id)}>
            <Delete width="32" height="32" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contactList: getFilteredNumbers(state),
});

const mapDispatchToProps = {
  onHandleRemove: deleteNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
