import { NavLink } from 'react-router-dom';
import css from './Navigation.css/Navigation.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={css.link}
      activeClassName={css.activeLink}
    >
      Регистрация
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={css.link}
      activeClassName={css.activeLink}
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;
