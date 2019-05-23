import React from 'react';
// import { login } from '@/api'

export default class App extends React.Component {
  componentDidMount() {
    document.title = '登录';
  }
  handleSubmit = (e) => {
   
  }
  handleRegister = () => {
    const { history } = this.props;
    history.push('/register');
  }
  render() {
    return (
      <div className="login-page" style={{backgroundColor: this.props.bgc}}>
          登录
      </div>
    );
  }
}