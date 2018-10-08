/**
 * Created by Ace on 2018. 10. 5..
 */
import axios from 'axios';

function getCompanyListApi(params) {
  console.log('params', params);
  // return axios.get(`http://114.207.113.7:8000/company-search/?name=${name}&location=${location}`)
  if (params) {
    return axios.get(`http://114.207.113.7:8000/company-search/?name=${params.name}&location=${params.area}`)
  } else {
    return axios.get(`http://114.207.113.7:8000/company-search/?search`)
  }
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

function updateHeartApi(id, bool) {
  console.log('id', id);
  console.log('bool', bool);
  if (bool) return axios.put(`http://114.207.113.7:8000/company-heart/${id}/?up`)
  else return axios.put(`http://114.207.113.7:8000/company-heart/${id}/?down`)
}

export const updateHeart = (id, bool) => dispatch => {
  dispatch({type: 'UPDATE_HEART_STARTED'});
  return updateHeartApi(id, bool).then(
    (response) => {
      dispatch({
        type: 'UPDATE_HEART_SUCCESS',
        payload: response
      })
    }
  ).catch(error => {
    dispatch({
      type: 'UPDATE_HEART_FAILURE',
      payload: error
    });
    throw(error);
  })

};

const updateHeartStarted = () => ({
  type: 'UPDATE_HEART_STARTED'
});

const updateHeartSuccess = list => ({
  type: 'UPDATE_HEART_SUCCESS',
  payload: {
    ...list
  }
});

const updateHeartFailure = error => ({
  type: 'UPDATE_HEART_FAILURE',
  payload: {
    error
  }
});