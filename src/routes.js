import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import PainRecordsPage from './components/painrecords/PainRecordsPage';
import ManagePainRecordPage from './components/painrecords/ManagePainRecordPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="painrecords" component={PainRecordsPage} />
    <Route path="painrecord" component={ManagePainRecordPage} />
    <Route path="painrecord/:id" component={ManagePainRecordPage} />


  </Route> 
);
