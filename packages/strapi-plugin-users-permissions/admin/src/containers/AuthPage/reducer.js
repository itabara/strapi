/*
 *
 * AuthPage reducer
 *
 */

import { fromJS, List, Map } from 'immutable';
import {
  ON_CHANGE_INPUT,
  SET_ERRORS,
  SET_FORM,
  SUBMIT_ERROR,
  SUBMIT_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  didCheckErrors: false,
  formErrors: List([]),
  formType: 'login',
  modifiedData: Map({}),
  submitSuccess: false,
});

function authPageReducer(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_INPUT:
      return state
        .updateIn(['modifiedData', action.key], () => action.value);
    case SET_ERRORS:
    case SUBMIT_ERROR:
      return state
        .set('didCheckErrors', !state.get('didCheckErrors'))
        .set('formErrors', List(action.formErrors));
    case SET_FORM:
      return state
        .set('formErrors', List([]))
        .set('formType', action.formType)
        .set('submitSuccess', false)
        .set('modifiedData', Map(action.data));
    case SUBMIT_SUCCEEDED:
      return state.set('submitSuccess', true);
    default:
      return state;
  }
}

export default authPageReducer;
