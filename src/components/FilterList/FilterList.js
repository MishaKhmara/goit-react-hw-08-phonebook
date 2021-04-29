import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contactSelector';
import { filteredNumber } from '../../redux/contacts/contactsAction';
import css from '../Phonebook/Phonebook.module.css';

export default function FilterList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onHandleChange = e => dispatch(filteredNumber(e.target.value));

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onHandleChange}
        name="filter"
      />
    </label>
  );
}
