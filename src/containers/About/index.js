import React, { Component } from 'react'

import './index.scss'

class About extends Component {
  getItems(data){
    return data.map( (info) => {
      let { id, styleName, title, desc } = info;
      return (
        <div className="item" key={ id }>
          <div className="item-icon">
            <i className={`iconfont ${styleName}`}></i>
          </div>
          <div className="item-info">
            <p className="info-title">{ title }</p>
            <p className="info-desc">{ desc }</p>
          </div>
        </div>
      )
    })
  }

  render(){
    const data = [
      { id: 0, styleName: 'icon-age', title: '年龄', desc: '25' },
      { id: 1, styleName: 'icon-sex', title: '性别', desc: '男' },
      { id: 2, styleName: 'icon-education', title: '学历', desc: '本科' },
      { id: 3, styleName: 'icon-University', title: '所在公司', desc: 'Bugclose' },
      { id: 4, styleName: 'icon-coordinate', title: '籍贯', desc: '河南漯河' },
      { id: 5, styleName: 'icon-experience', title: '工作经验', desc: '2年' },
      { id: 6, styleName: 'icon-intention', title: '求职意向', desc: '前端开发' },
      { id: 7, styleName: 'icon-state', title: '状态', desc: '离职' },
      { id: 8, styleName: 'icon-experience', title: '到岗时间', desc: '2周' }
    ]

    return (
      <div className="about">
        <h1 className="about-title">关于我</h1>
        <div className="about-content">
          { this.getItems(data) }
        </div>
      </div>
    )
  }
}

export default About
