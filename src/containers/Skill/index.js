import React, { Component } from 'react'

import './index.scss'

class Skills extends Component {
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
      { id: 0, styleName: 'icon-keyboard', title: '编辑器', desc: '熟练掌握Atom' },
      { id: 1, styleName: 'icon-html5', title: 'HTML5', desc: '熟练掌握HTML/HTML5新特性及其运用' },
      { id: 2, styleName: 'icon-css3', title: 'CSS3', desc: '熟练掌握CSS/CSS3新特性，熟练掌握SASS等CSS扩展语言' },
      { id: 3, styleName: 'icon-javascript', title: 'ES6', desc: '掌握JS新标准ES6的语法特性(类，箭头函数，解构赋值等)，熟悉函数式编程' },
      { id: 4, styleName: 'icon-react', title: 'React.js', desc: '掌握Babel、React、Router，熟悉Redux等。掌握vue的基本使用' },
      { id: 5, styleName: 'icon-jquery', title: 'Node.js', desc: '了解Node.js客户端的使用' },
      { id: 6, styleName: 'icon-frame', title: '前端库和框架', desc: '掌握主流的Bootstrap、Ant Design、Element等UI库和框架' },
      { id: 7, styleName: 'icon-tools', title: '前端工程化', desc: '熟练使用npm、yarn、webpack、git、svn等开发工具。' },
      // { id: 8, styleName: 'icon-Programming', title: '团队', desc: '良好的团队协作能力，熟悉敏捷开发' },
    ]

    return (
      <div className="skills">
        <h1 className="skills-title">擅长技术</h1>
        <div className="skills-content">
          { this.getItems(data) }
        </div>
      </div>
    )
  }
}

export default Skills
