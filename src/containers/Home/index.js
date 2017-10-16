import React, { Component } from 'react'

import './index.scss'


// 没有数据的变化 用无状态组件即可
const Home = (props) => (
  <div className="home">
    <div className="avatar-img">
      <img src="https://avatars2.githubusercontent.com/u/20217793?v=4" className="avatar" alt=""/>
    </div>
    <div className="info">
      <p className="name">朱朝阳</p>
      <p className="profession">Bugclose 前端工程师</p>
      <p className="desc">曾先后就职于郑州天点科技有限公司、Bugclose等互联网公司。在天点科技期间主要从事网页制作与代码维护工作，加入Bugclose团队后，主要负责Bugclose后台管理系统的开发与迭代等工作，具有独立工作的能力与经验，良好的团队协作能力和代码规范。目前致力于React技术研究，并热衷于新知识的储备与学习。</p>
    </div>
  </div>
)

export default Home
