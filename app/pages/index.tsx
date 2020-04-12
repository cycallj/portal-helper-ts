import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'
import { Provider } from 'mobx-react'

import Main from '@view/index/Main'
import store from '@store/index'

configure({ enforceActions: 'observed' }) // 用于限制被 observable 的数据的修改方式，让其只能添加了 @action 的函数中进行修改

const render = () => {
  ReactDOM.render(
    <Provider {...store}>
      <Main />
    </Provider>,
    document.getElementById('app')
  )
}

render()
