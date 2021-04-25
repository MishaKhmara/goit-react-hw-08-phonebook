import css from '../Phonebook/Phonebook.module.css';
import { connect } from 'react-redux';
import { getFilter } from '../../redux/contacts/contactSelector';
import { filteredNumber } from '../../redux/contacts/contactsAction';

const FilterList = ({ filter, onFilterHandleChange }) => {
  const onHandleChange = event => {
    onFilterHandleChange(event.target.value);
  };
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
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = {
  onFilterHandleChange: filteredNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
