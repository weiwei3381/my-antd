import React from 'react'
import { Row, Col } from 'antd'
import './index.less'

export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      username: '小熊',
    })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.username}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">2020年5月1日</span>
          </Col>
        </Row>
      </div>
    )
  }
}
