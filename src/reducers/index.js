/**
 * Created by Ace on 2018. 10. 5..
 */
import { combineReducers } from 'redux';
import _ from 'lodash';

const rootReducer = combineReducers({
  companies
})

function companies(state = [], action) {
  return state;
  console.log('state', state);
}

export default rootReducer;