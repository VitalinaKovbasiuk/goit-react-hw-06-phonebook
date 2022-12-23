// import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { setFilter } from 'redux/contacts/contact-slice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contact-slice';

export default function Filter () {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      <Input
        type="text"
        name={filter}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </label>
  );
}

