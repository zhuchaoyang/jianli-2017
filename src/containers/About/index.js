import React, { Component } from 'react'

import './index.scss'

class About extends Component {
  render(){
    return (
      <div className="about">
        <h1 className="about-title">关于我</h1>
        <div className="about-content">
          <div className="item">
            <div className="item-icon">
              <i className="iconfont icon-age"></i>
            </div>
            <div className="item-info">
              <p className="info-title">年龄</p>
              <p className="info-desc">18</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
