import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearchChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchboxContainer}>
      <p>Find contacts by name or number</p>
      <input
        className={css.field}
        type="text"
        value={filter}
        onChange={handleSearchChange}
      />
    </div>
  );
}
