 // Set up your root reducer here...
 import { combineReducers } from 'redux';
 import painRecords from './painRecordReducer';
 import authors from './authorReducer';
 import ajaxCallsInProgress from './ajaxStatusReducer';
 import {reducer as form} from 'redux-form';


 const rootReducer = combineReducers({
   painRecords,
   authors,
   ajaxCallsInProgress,
   form
 });

 export default rootReducer  ;
