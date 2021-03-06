import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import SignIn from '../SignIn/SignIn';
import FormEmail from '../FormEmail/FormEmail';
import FormResetPassword from '../FormResetPassword/FormResetPassword';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';
import UploadVideoForm from '../UploadVideoForm/UploadVideoForm';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/reset/confirm/email" exact component={FormEmail} />
            <Route
              path="/reset/password/:resetPasswordToken"
              exact
              component={FormResetPassword}
            />
            <Route path="/confirm/:confirmationCode" exact component={SignIn} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/upload" exact component={UploadVideoForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
