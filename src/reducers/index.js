/**
 * Created by Ace on 2018. 10. 5..
 */
import { combineReducers } from 'redux';
import _ from 'lodash';

const rootReducer = combineReducers({
  companies
})

function companies(state = {loading: false, companies: [], error: null }, action) {
  console.log('state', state);
  console.log('action', action);
  switch(action.type) {
    case 'GET_COMPANY_STARTED':
      return {
        ...state,
        loading: true,
      };
    case 'GET_COMPANY_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        companies: [...action.payload.data.results]
      }
  }
  return state;
}

export default rootReducer;