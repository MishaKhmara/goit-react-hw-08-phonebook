import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../redux/auth';
import { logOut } from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div className={css.container}>
      <img src={defaultAvatar} alt="" width="32" className={css.avatar} />
      <span className={css.name}>Добро пожаловать, {name}</span>
      <Button type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}
