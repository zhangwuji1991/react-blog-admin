import React from 'react';

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
      <div>
        <h1 style={{marginTop: 40}}>404</h1>
        <h3>您要找的页面不存在</h3>
      </div>
    );
  }
}