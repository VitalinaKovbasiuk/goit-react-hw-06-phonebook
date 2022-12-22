import PropTypes from 'prop-types';
import { Input } from './Filter.styled';
import { setFilter } from 'redux/filter/filter-slice';
import { useDispatch, useSelector } from 'react-redux';
// import { setFilter }  from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  const onChange = e => {
  dispatch(setFilter(e.currentTarge));
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

export default Filter;