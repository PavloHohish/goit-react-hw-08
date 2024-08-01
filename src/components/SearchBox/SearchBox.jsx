import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearchChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.field}
        type="text"
        value={filter}
        onChange={handleSearchChange}
      />
    </>
  );
}
