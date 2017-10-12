import React, { Component } from 'react'
import { Link } from 'react-router'

import { Menu, Icon } from 'antd'


import './index.scss'

class NavMenu extends Component {
  getMenuItems(data){
    return data.map( (info) => (
      <Menu.Item key={ info.name }>
        <Link to={ info.name == "home" ? "/" : `/${ info.name }` }>
          <span className="nav-text">{ info.desc }</span>
        </Link>
      </Menu.Item>
    ))
  }
  render(){
    const data = [
      { name: 'home', desc: '首页' },
      { name: 'skills', desc: '专业技能' },
      { name: 'project', desc: '项目经验' },
      { name: 'contact', desc: '联系我' },
      { name: 'about', desc: '关于我' }
    ]

    return (
      <aside className="layout-aside">
        <div className="layout-logo">
          <i className="logo"></i>
          <span className="title-text">朱朝阳</span>
        </div>
        <Menu
          className="layout-nav"
          mode="inline"
          theme="dark"
          defaultSelectedKeys={["home"]}
          selectedKeys={["home"]}>
          { this.getMenuItems( data )}
        </Menu>
        <div className="aside-action">
            <Icon type="right" style={{ fontSize: 16, color: '#08c' }} />
        </div>
      </aside>
    )
  }
}

export default NavMenu
