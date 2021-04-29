import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNumber } from '../../redux/contacts/contactsOperations';
import { getFilteredNumbers } from '../../redux/contacts/contactSelector';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as Delete } from '../../img/iconlitter.svg';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contactList = useSelector(getFilteredNumbers);

  return (
    <ul className={css.phoneList}>
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={css.ContactsList}>
          <p className={css.name}>{name}:</p>
          <p className={css.number}>{number}</p>
          <IconButton onClick={() => dispatch(deleteNumber(id))}>
            <Delete width="32" height="32" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}
