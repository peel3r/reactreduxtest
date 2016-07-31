import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function painRecordReducer(state = initialState.painRecords, action){
  switch (action.type) {
    case types.LOAD_PAINRECORDS_SUCCESS:
          return action.painRecords;

    case types.CREATE_PAINRECORDS_SUCCESS:
          return [
            ...state,
            Object.assign({}, action.painRecord)
          ];

    case types.UPDATE_PAINRECORDS_SUCCESS:
      return [
        ...state.filter(painRecord => painRecord.id !== action.painRecord.id),
        Object.assign({}, action.painRecord)
      ];


    default:
          return state;
  }
}
