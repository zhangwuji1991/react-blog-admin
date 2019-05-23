import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

// antd样式
import 'antd/dist/antd.less';

const Root = () => {
    return (
        <BrowserRouter basename='/'>
            <Route path={`/`} component={App}></Route>
        </BrowserRouter>
    )

}

ReactDOM.render(
	<Root/>, 
	document.getElementById('root')
);


serviceWorker.unregister();
