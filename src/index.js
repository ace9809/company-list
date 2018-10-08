import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'react-app-polyfill/ie9'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

//스토어 만들때 redux-thunk 미들웨어 적용시켜줌
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  //하위 컨테이너에서 store에 접근할 수 있도록 함
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
