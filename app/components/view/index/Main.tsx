import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Test from '@public/Test';
import Counter from '@view/index/Counter/Counter';

import '@css/index/main.scss';// 在 tsconfig.json 里配置

@hot(module)
class Main extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="person">
        <div className="person__prop person__prop--name">
          <div>name:</div>
          <div>Cai</div>
        </div>
        <div className="person__prop person__prop--age">
          <div>age:</div>
          <div>12124234</div>
        </div>

        <Test/>

        <Counter/>

        <div>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-mgj" />
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-youzan" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Main;