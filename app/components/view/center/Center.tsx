import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable';
import { createHashHistory } from 'history';
const history = createHashHistory();
import { Layout, Menu, Icon, Tooltip } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Home from '@view/center/Home/Home';
import Page from '@view/center/Page/Page';

class Center extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Layout>
          <Layout>
            <Sider>
              <Menu theme="dark" mode="inline">
                <Menu.Item>
                  <Link to="/" replace>
                    <span>Home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to={"/page"} replace>
                    <span>Page</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Content>
              <Route exact path="/" component={Home}></Route>
              <Route path="/page" component={Page}></Route>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Center;