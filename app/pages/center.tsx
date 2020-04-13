import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'

import Center from '@view/center/Center'
import store from '@store/index'

configure({ enforceActions: 'observed' }) // 用于限制被 observable 的数据的修改方式，让其只能添加了 @action 的函数中进行修改

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <Provider {...store}>
      <Component />
    </Provider>,
    document.getElementById('app2')
  )
}

render(Center)
