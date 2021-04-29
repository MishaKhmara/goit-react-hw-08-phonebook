import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getCurrentUser } from './redux/auth';
import { useDispatch } from 'react-redux';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted redirectTo="/">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}
