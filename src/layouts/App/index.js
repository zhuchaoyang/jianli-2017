import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NavMenu from '../NavMenu';
import FlipNav from '../FlipNav';

import './index.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapse: true,  //false 展开 true 收起
      current: 'home',
      isHengping: false,
      num: 0,
      direction: 1,   //0 后退 1前进
    }
  }
  handleCollapse = (e) => {
    this.setState({
      collapse: !this.state.collapse
    })
  }
  //在完成首次渲染之前调用（首次加载或刷新页面），根据url的hash值改变state，具体表现为侧边栏选中项与页面渲染页相对应
  componentWillMount(){
    const nowPathname = window.location.hash.split("#/")[1] || 'home';
    const routerArr = ['home', 'about', 'skill', 'project', 'contact'];
    let num = 0;

    routerArr.forEach( (key, index) => {
      if (nowPathname == key){
        num = index;
      }
    })

    this.setState({
      current: nowPathname,
      num,
    })
  }
  //完成渲染新的props或者state后调用（切换路由），路由变化引发hash值变化，通过hash值与之前
  //状态属性作相应比较，如有变化则改变state，以达到侧边栏选中项与页面渲染页相对应
  componentDidUpdate(prevProps,prevState){
    const newPathname = window.location.hash.split("#/")[1] || 'home';

    // console.log(prevState)

    if (newPathname != prevState.current){
      const routerArr = ['home', 'about', 'skill', 'project', 'contact'];
      let num = 0;

      routerArr.forEach( (key, index) => {
        if (newPathname == key){
          num = index;
        }
      })

      let direction = 0;
      direction = (prevState.num - num) > 0 ? 0 : 1

      this.setState({
        current: newPathname,
        num,
        direction,
      })
    }

  }
  render(){
    const collapse = this.state.collapse;
    const direction = this.state.direction;
    const downSrc = 'https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.bugclose.com%2Fboss%2Fzcy%2Fdown%2F%E6%9C%B1%E6%9C%9D%E9%98%B3-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88.docx' || 'https://www.bugclose.com/boss/zcy/down/朱朝阳-前端工程师.docx';

    return (
      <div className={ collapse ? "layout layout-collapse" : "layout" }>
        <NavMenu
          collapse={ collapse }
          handleCollapse={ this.handleCollapse }
          current={ this.state.current }/>
        <div className={direction > 0 ? "layout-main" : "layout-main back"}>
          <ReactCSSTransitionGroup
            className="app"
            component="div"
            transitionName="transitionWrapper"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            <div className="content" key={this.props.location.pathname}>
              {this.props.children}
            </div>
          </ReactCSSTransitionGroup>
        </div>

        <FlipNav
          num={ this.state.num }/>
        <div className="downResume" title="点击下载电子版简历">
          <a href={ downSrc } target="_blank">下载简历</a>
        </div>

      </div>
    )
  }
}

export default App
