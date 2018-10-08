/**
 * Created by Ace on 2018. 10. 5..
 */
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  companies
});

function companies(state = {loading: false, companies: [], error: null, count: 0 }, action) {
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
        companies: [...action.payload.data.results],
        count: action.payload.data.count
      };
    case 'ADD_COMPANY_STARTED':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_COMPANY_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        companies: [...state.companies, ...action.payload.data.results],
        count: action.payload.data.count
      };
    case 'UPDATE_HEART_STARTED':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_HEART_SUCCESS':
      return {
        ...state,
        companies: state.companies.map(
          (company, i) => company.id === action.payload.data.id ? {...company, ...action.payload.data}
            : company
        ),
        loading: false,
        error: null,
      };
    default:
      return state
  }
}

export default rootReducer;