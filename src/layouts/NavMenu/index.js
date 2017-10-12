import React, { Component } from 'react'
import { Link } from 'react-router'

import { Menu, Icon } from 'antd'


import './index.scss'

class NavMenu extends Component {
  render(){
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
          <Menu.Item>
            <Link to="/">
              <span className="nav-text">首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">
              <span className="nav-text">关于我</span>
            </Link>
          </Menu.Item>

        </Menu>
        <div className="aside-action">
            <Icon type="right" style={{ fontSize: 16, color: '#08c' }} />
        </div>
      </aside>
    )
  }
}

export default NavMenu
