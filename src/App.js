import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getCurrentUser } from './redux/auth';
import { connect } from 'react-redux';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/"
              component={LoginView}
            />
            <PrivateRoute
              path="/"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
