import React from 'react';
import ReactDOM from 'react-dom';

// 兼容ie
import 'babel-polyfill';

// 在跟组件通过Provider中间件注入store
import { Provider } from 'mobx-react';
import store from './store';


import App from './App';
import * as serviceWorker from './serviceWorker';

// mock数据
import './mock';

// antd样式
import 'antd/dist/antd.less';


ReactDOM.render(
    <Provider { ...store }>
      <App/>
    </Provider>,
	document.getElementById('root')
);


serviceWorker.unregister();
