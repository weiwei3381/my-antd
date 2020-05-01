import React from 'react'
import { Menu } from 'antd'
import './index.less'
import MenuConfig from '../../resource/menuConfig'

const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component {
  state = {
    menuTreeNode: null,
  }
  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode,
    })
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/shield2.svg" alt="" />
          <h1>文件管理系统</h1>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    )
  }
}
