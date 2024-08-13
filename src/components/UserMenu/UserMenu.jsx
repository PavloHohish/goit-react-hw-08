import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/ops';
import css from './UserMenu.module.css';

export default function AppBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.usermenu}>
      <p>Welcome {user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}
