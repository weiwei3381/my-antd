import React from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import { About } from './About'
import { Topics } from './Topics'
import { Main } from './Main'

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            {/* 不加exact的话, "/about"也能匹配到"/", 如果不加switch, name还会继续向下进行匹配 */}
            <Route exact={true} path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}
