import React from 'react';
import { getMenu } from '@/api';
import Menu from './menu';
import './index.less'

const SubMenu = Menu.SubMenu;

export default class App extends React.Component {
  state = {
    collapsed: false,
    menuList: []
  };

  initData = async() => {
    const res = await getMenu()
    console.log(res)
    this.setState({
      menuList : res.data 
    })
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    this.initData()
  }
  render() {
    const { menuList } = this.state
    return (
     <div  className="sider">
        <div className="sider-top">
        	后台管理
        </div>
        <Menu 
          data={menuList} 
          mode='inline'
          theme="dark"
          // inlineCollapsed={tool.collapsed}
          // openKeys={openKeys}
          // selectedKeys={selectedKeys}
          // onOpenChange={this.onOpenChange}
          onClick={this.menuClickHandle}/>
      </div>
    );
  }
}


 // <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
        //   <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        // </Button>