import React, { Component } from 'react'

import { Modal } from 'antd'

import './index.scss'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      img: ''
    }
  }
  showModal = (e) => {
    this.setState({
      visible: true,
      img: e.currentTarget.getAttribute("data-src")
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false,
      img: ''
    })
  }
  render(){
    return (
      <div className="contact">
        <h1 className="contact-title"> 联系我 </h1>
        <div className="contact-content">
          <div className="content-main">
            <div className="main-item"
              title="点击获取二维码"
              data-src="./assets/images/weixin.jpg"
              onClick={ this.showModal }>
              <div className="item-icon">
                <i className="iconfont icon-weixin"></i>
                <div className="item-content"> 微信：names5236 </div>
              </div>
            </div>
            <div className="main-item"
              title="点击获取二维码"
              data-src="./assets/images/qq.jpg"
              onClick={ this.showModal }>
              <div className="item-icon">
                <i className="iconfont icon-qq"></i>
                <div className="item-content"> QQ：455085979 </div>
              </div>
            </div>
            <a href="mailto:zcy_2013@163.com" className="main-item" title="点击向我发送邮件">
              <div className="item-icon">
                <i className="iconfont icon-email"></i>
                <div className="item-content"> 邮箱：zcy_2013@163.com </div>
              </div>
            </a>
            <a href="tel:15903620494" className="main-item" title="点击向我打电话">
              <div className="item-icon">
                <i className="iconfont icon-phone"></i>
                <div className="item-content"> 手机：15903620494 </div>
              </div>
            </a>
          </div>
          <div className="content-other">
            <p className="other-title">其它方式</p>
            <div className="other-content">
              <a href="https://www.github.com/zhuchaoyang" className="other-item">
                <i className="iconfont icon-github"></i>
              </a>
              <a href="https://www.github.com/zhuchaoyang" className="other-item">
                <i className="iconfont icon-zhihu"></i>
              </a>
              <a href="https://www.github.com/zhuchaoyang" className="other-item">
                <i className="iconfont icon-weibo"></i>
              </a>
            </div>
          </div>
          <Modal
            visible={ this.state.visible }
            title=""
            footer={ null }
            onCancel={ this.handleCancel }>
                <div className="contact-QRcode">
                  <img src={ this.state.img } alt=""/>
                </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Contact
