import React from 'react';
import { connect } from 'react-redux';
import { getUsername } from '../../redux/auth';
import { logOut } from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={css.container}>
    <img src={avatar} alt="" width="32" className={css.avatar} />
    <span className={css.name}>Добро пожаловать, {name}</span>
    <Button type="button" onClick={onLogout}>
      Logout
    </Button>
  </div>
);
const mapStateToProps = state => ({
  name: getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
