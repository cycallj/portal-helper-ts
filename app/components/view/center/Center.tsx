import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { createHashHistory } from 'history'
const history = createHashHistory()
import { Layout, Menu } from 'antd'
const { Header, Footer, Sider, Content } = Layout

import Home from '@view/center/Home/Home'
import Page from '@view/center/Page/Page'

import '@css/center/center.scss' // 在 tsconfig.json 里配置

@hot(module)
class Center extends Component {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header className="my-header">Header</Header>
          <Layout>
            <Sider>
              <Menu theme="dark" mode="inline">
                <Menu.Item>
                  <Link to="/" replace>
                    <span>Home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={'/page'} replace>
                    <span>Page</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content>
              <Route exact path="/" component={Home} />
              <Route path="/page" component={Page} />
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    )
  }
}

export default Center
