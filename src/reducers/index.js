 // Set up your root reducer here...
 import { combineReducers } from 'redux';
 import painRecords from './painRecordReducer';
 import authors from './authorReducer';
 import ajaxCallsInProgress from './ajaxStatusReducer';


 const rootReducer = combineReducers({
   painRecords,
   authors,
   ajaxCallsInProgress 
 });

 export default rootReducer  ;
