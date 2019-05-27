import React from 'react';
import { getMenu } from '@/api';
import Menu from './menu';
import { withRouter } from 'react-router-dom';
import './index.less';



export default @withRouter class App extends React.Component {
  state = {
    menuList: [],
    openKeys: [],
    selectedKeys: []
  };

  initData = async() => {
    const res = await getMenu()
    this.setState({
      menuList : res.data 
    })
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  menuClickHandle= (e) => {
     this.props.history.push(e.key);
  }
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