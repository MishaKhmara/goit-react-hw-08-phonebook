import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Страница регистрации</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

// import { useState, useCallback } from 'react';

// import { useDispatch } from 'react-redux';
// import { register } from '../redux/auth';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

// export default function RegisterView() {
//   const dispatch = useDispatch();

//   const onRegister = useCallback(() => dispatch(register()), [dispatch]);

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const updateName = e => {
//     setName(e.target.value);
//   };
//   const updateEmail = e => {
//     setEmail(e.target.value);
//   };
//   const updatePassword = e => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     onRegister({ name, email, password });
//     setName(name);
//     setEmail(email);
//     setPassword(password);
//   };

//   return (
//     <div>
//       <h1>Страница регистрации</h1>

//       <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
//         <label style={styles.label}>
//           Имя
//           <input type="text" name="name" value={name} onChange={updateName} />
//         </label>

//         <label style={styles.label}>
//           Почта
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={updateEmail}
//           />
//         </label>

//         <label style={styles.label}>
//           Пароль
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={updatePassword}
//           />
//         </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     </div>
//   );
// }
