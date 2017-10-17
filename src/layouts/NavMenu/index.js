import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { Menu, Icon } from 'antd';

// { collapse ? "" : <span className="nav-text">{ info.desc }</span> }
import './index.scss';

class NavMenu extends Component {

  getMenuItems(data, collapse){
    return data.map( (info) => (
      <Menu.Item key={ info.name } title={ collapse ? info.desc : "" }>
        <Link to={ info.name == "home" ? "/" : `/${ info.name }` }>
          <i className={ `iconfont ${info.icon}` } ></i>
          { collapse ? "" : <span className="nav-text">{ info.desc }</span> }
        </Link>
      </Menu.Item>
    ))
  }
  render(){
    const data = [
      { name: 'home',     desc: '首页',      icon: "icon-index" },
      { name: 'about',    desc: '关于我',    icon: "icon-about" },
      { name: 'skill',    desc: '专业技能',  icon: "icon-skill" },
      { name: 'project',  desc: '项目经验',  icon: "icon-project" },
      { name: 'contact',  desc: '联系我',    icon: "icon-contact" },
    ]

    const { collapse, handleCollapse, current } = this.props;

    return (
      <aside className="layout-sidebar">
        <div className="sidebar-logo">
          <i className="iconfont icon-jianli logo"></i>
          { collapse ? "" : <span className="title-text">朱朝阳</span> }
        </div>
        <Menu
          className="sidebar-nav"
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['project']}
          selectedKeys={[current]}>
          { this.getMenuItems( data, collapse )}
        </Menu>
        <div className="sidebar-action" onClick={handleCollapse}>
          {/*{ collapse ? <Icon type="right" /> : <Icon type="left" /> }*/}
          <Icon type="right" title={ collapse ? "展开" : "收起"}/>
        </div>
      </aside>
    )
  }
}

// NavMenu.contextTypes = {
//   router: PropTypes.object
// }

export default NavMenu
