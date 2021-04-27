import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../redux/auth';
import css from './Navigation.css/Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className={css.link} activeClassName={css.activeLink}>
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

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
