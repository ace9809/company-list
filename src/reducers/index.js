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
    case 'UPDATE_HEART_STARTED':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_HEART_SUCCESS':
      return {
        ...state,
        companies: state.companies.map(
          (company, i) => i === action.payload.data.id ? {...company, company: action.payload.data}
            : company
        ),
        loading: false,
        error: null,
      }
  }
  return state;
}

export default rootReducer;