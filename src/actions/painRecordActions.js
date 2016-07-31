import painRecordApi from '../api/mockPainRecordApi';
import * as types from './actionsTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadPainRecordsSuccess(painRecords) {
  return { type: types.LOAD_PAINRECORDS_SUCCESS, painRecords};
}

export function updatePainRecordSuccess(painRecord) {
  return { type: types.UPDATE_PAINRECORDS_SUCCESS, painRecord};
}

export function createPainRecordSuccess(painRecord) {
  return { type: types.CREATE_PAINRECORDS_SUCCESS, painRecord};
}

export function loadPainRecords() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return painRecordApi.getAllPainRecords().then(painRecords => {
      dispatch(loadPainRecordsSuccess(painRecords));
    }).catch(error => {
      throw (error);
    });
  };
}

export function savePainRecord(painRecord) {
  return (dispatch, getState) => {
    dispatch(beginAjaxCall());
    return painRecordApi.savePainRecord(painRecord).then(painRecord => {
      painRecord.id ? dispatch(updatePainRecordSuccess(painRecord)) :
        dispatch(createPainRecordSuccess(painRecord));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
