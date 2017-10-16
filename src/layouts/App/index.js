import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import NavMenu from '../NavMenu'

import './index.scss'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapse: false,
      pathname: 'home',
    }
  }
  handleCollapse = (e) => {
    this.setState({
      collapse: !this.state.collapse
    })
  }
  componentDidUpdate(nextProps, nextState){
    const newPathname = window.location.hash.split("#/")[1] || 'home';

    if (newPathname != nextState.pathname){
      this.setState({
        pathname: newPathname
      })
    }

  }
  render(){
    const collapse = this.state.collapse

    return (
      <div>
        <NavMenu
          collapse={ collapse }
          handleCollapse={ this.handleCollapse }
          pathname={ this.state.pathname }/>
        <div className={ collapse ? "main main-collapse" : "main" }>
          <ReactCSSTransitionGroup
            className="app"
            component="div"
            transitionName="app"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div className="content" key={this.props.location.pathname}>
              {this.props.children}
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default App
