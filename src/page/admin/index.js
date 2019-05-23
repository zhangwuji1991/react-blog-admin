import React from 'react';
import { Layout } from 'antd';
import Siders from '@/component/sider'
import Headers from '@/component/header';
import Footers from '@/component/footer';
import './index.less'
import Route from '@/route';

const { Header, Sider, Content,Footer } = Layout;



export default class App extends React.Component {
  componentDidMount() {
    document.title = '主页';
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider className="sider-context"><Siders/></Sider>
          <Layout className="conter">
            <Header className="header-context"><Headers/></Header>
            <Content><Route/></Content>
            <Footer><Footers/></Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}