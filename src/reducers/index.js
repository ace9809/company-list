/**
 * Created by Ace on 2018. 10. 5..
 */
import { combineReducers } from 'redux';
import _ from 'lodash';

const rootReducer = combineReducers({
  companies
})

function companies(state = [], action) {
  console.log('state', state);
}