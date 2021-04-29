import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth';
import css from './Navigation.css/Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={css.link}
        activeClassName={css.activeLink}
      >
        Главная
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={css.link}
          activeClassName={css.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
}
