import React, { Component } from 'react';

import { Menu, Button, Icon } from 'antd';
import { Link } from 'react-router';

import './index.scss';

const FlipNav = (props) => {
  const routerArr = ['/', '/about', '/skill', '/project', '/contact'];

  let { num } = props;

  return (
    <div className="layout-flip">
      <div className="flip-prev" title="返回">
        <Link to={ num > 0 ? routerArr[num - 1] : routerArr[num] }>
          <Button type="primary">
            <Icon type="left"/>
          </Button>
        </Link>
      </div>
      <div className="flip-next" title="前进">
        <Link to={ num < 4 ? routerArr[num + 1] : routerArr[num] }>
          <Button type="primary">
            <Icon type="right"/>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FlipNav
