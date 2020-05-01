import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import { Login } from './pages/login'
import Admin from './admin'
import { Buttons } from './pages/ui/buttons'
import NoMatch from './pages/noMatch'

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/ui"
            render={() => (
              <Admin>
                <Route path="/ui/buttons" component={Buttons} />
                <Route component={NoMatch} />
              </Admin>
            )}
          />
        </App>
      </HashRouter>
    )
  }
}
