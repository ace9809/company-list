/**
 * Created by Ace on 2018. 10. 5..
 */
import axios from 'axios';

function getCompanyListApi(params, offset) {
  // return axios.get(`http://114.207.113.7:8000/company-search/?name=${name}&location=${location}`)
  if (params) {
    return axios.get(`http://114.207.113.7:8000/company-search/?name=${params.name}&location=${params.area}&offset=${offset}`)
  } else {
    return axios.get(`http://114.207.113.7:8000/company-search/?search`)
  }
}

export const getCompanyList = (postId, offset) => dispatch => {
  dispatch(getCompanyStarted);
  return getCompanyListApi(postId).then(
    (response) => {
      dispatch(getCompanySuccess(response))
    }
  ).catch(error => {
    dispatch(apiFailure(error));
    throw(error);
  })
};

export const addCompanyList = (postId, offset) => dispatch => {
  dispatch(addCompanyStarted);
  return getCompanyListApi(postId, offset).then(
    (response) => {
      dispatch(addCompanySuccess(response))
    }
  ).catch(error => {
    dispatch(apiFailure(error));
    throw(error);
  })
};

function updateHeartApi(id, bool) {
  console.log('id', id);
  console.log('bool', bool);
  if (bool) return axios.put(`http://114.207.113.7:8000/company-heart/${id}/?up`)
  else return axios.put(`http://114.207.113.7:8000/company-heart/${id}/?down`)
}

export const updateHeart = (id, bool) => dispatch => {
  dispatch(updateHeartStarted);
  return updateHeartApi(id, bool).then(
    (response) => {
      dispatch(updateHeartSuccess(response))
    }
  ).catch(error => {
    dispatch(apiFailure(error));
    throw(error);
  })

};

const apiFailure = error => ({
  type: 'API_FAILURE',
  payload: {
    error
  }
});

const getCompanyStarted = () => ({
  type: 'GET_COMPANY_STARTED'
});

const getCompanySuccess = list => ({
  type: 'GET_COMPANY_SUCCESS',
  payload: {
    ...list
  }
});

const addCompanyStarted = () => ({
  type: 'ADD_COMPANY_STARTED'
});

const addCompanySuccess = list => ({
  type: 'ADD_COMPANY_SUCCESS',
  payload: {
    ...list
  }
});

const updateHeartStarted = () => ({
  type: 'UPDATE_HEART_STARTED'
});

const updateHeartSuccess = list => ({
  type: 'UPDATE_HEART_SUCCESS',
  payload: {
    ...list
  }
});
