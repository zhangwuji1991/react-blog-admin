import React from 'react';
import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';
import Bundle from './component/loadable';
import './App.css'

const Login = Bundle(() => import(/* webpackChunkName: "login" */ './page/login'));
const Register = Bundle(() => import(/* webpackChunkName: "register" */ './page/register'));
const Admin = Bundle(() => import(/* webpackChunkName: "admin" */  './page/admin'));
const NotFound = Bundle(() => import(/* webpackChunkName: "notFound" */  './page/notFound'));

export default class App extends React.Component {
  render() {
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>  
          <Route exact path="/register" component={Register}></Route>  
          <Route path="/admin" component={Admin}></Route>  
          <Route exact path="/" render={() => <Redirect to="/login" replace/>} ></Route>  
          <Route component={NotFound}></Route>  
          {/* exact 属性作用为路由必须完全匹配,避免重复渲染，父路由下若有子路由必须去除exact属性，否则子路由无法展示 */}
        </Switch>
      </BrowserRouter>
    )
  }
}

