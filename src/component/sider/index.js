import React from 'react';
import { Menu, Icon } from 'antd';
import './index.less'

const SubMenu = Menu.SubMenu;

export default class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
     <div  className="sider">
        <div className="sider-top">
        	后台管理
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="2">Option 5</Menu.Item>
            <Menu.Item key="3">Option 6</Menu.Item>
            <Menu.Item key="4">Option 7</Menu.Item>
          </SubMenu>
           <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="8">Option 5</Menu.Item>
            <Menu.Item key="9">Option 6</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}


 // <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
        //   <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        // </Button>