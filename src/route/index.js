import React from 'react'
import { Route } from 'react-router-dom';
// import AuthRouter from '@/component/authRouter';
import Bundle from '@/component/loadable';

const User = Bundle(() => import(/* webpackChunkName: "index" */ '@/page/user'));


export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/admin/user"  component={User}/>
      </div>
    )
  }
}