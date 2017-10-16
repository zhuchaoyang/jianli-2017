import React, { Component } from 'react'

import { Timeline } from 'antd'

import './index.scss'
import TimelineItem from './TimelineItem'
import { fetchRepos } from '../../api/fetchGithub'

class Project extends Component {
  constructor(props){
    super(props)
    this.state = {
      repos: []
    }
  }
  componentWillMount(){
    fetchRepos("zhuchaoyang")
      .then( info => {
        this.setState({
          repos: info.data
        })
      })
  }
  getRepoItems = (data) => {
    return data.map( (info) => {
      let { id, name, html_url, description } = info;
      return (
        <TimelineItem key={id}
          name={ name }
          html_url={ html_url }
          description={ description }/>
      )
    })
  }
  render(){
    return (
      <div className="project">
        <h1 className="project-title"> 项目经验 </h1>
        <div className="project-content">
          <Timeline pending={ <a href="https://www.github.com/zhuchaoyang" target="_blank">更多项目请访问我的Github</a> }>
            { this.getRepoItems(this.state.repos) }
          </Timeline>
        </div>
      </div>
    )
  }
}

export default Project
