import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import PainRecordsPage from './components/painrecords/PainRecordsPage';
import ManagePainRecordPage from './components/painrecords/ManagePainRecordPage'; //eslint-disable-line import/no-named-as-default
import Signin from './auth/signin';
import Signup from './auth/signup';
import Signout from './auth/signout';
import requireAuth from './auth/require_auth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="painrecords" component={requireAuth(PainRecordsPage)} />
    <Route path="painrecord" component={ManagePainRecordPage} />
    <Route path="painrecord/:id" component={ManagePainRecordPage} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
    <Route path="signout" component={Signout} />

  </Route>
);
