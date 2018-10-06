/**
 * Created by Ace on 2018. 10. 5..
 */
import axios from 'axios';

function getCompanyListApi(params) {
  return axios.get(`http://114.207.113.7:8000/company-search/?search`)
}

export const getCompanyList = (postId) => dispatch => {
  dispatch({type: 'GET_COMPANY_STARTED'});
  return getCompanyListApi(postId).then(
    (response) => {
      dispatch({
        type: 'GET_COMPANY_SUCCESS',
        payload: response
      })
    }
  ).catch(error => {
    dispatch({
      type: 'GET_COMPANY_FAILURE',
      payload: error
    });
    throw(error);
  })

};

const getCompanyStarted = () => ({
  type: 'GET_COMPANY_STARTED'
});

const getCompanySuccess = list => ({
  type: 'GET_COMPANY_SUCCESS',
  payload: {
    ...list
  }
});

const getCompanyFailure = error => ({
  type: 'GET_COMPANY_FAILURE',
  payload: {
    error
  }
});