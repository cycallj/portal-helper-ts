import React, { Component } from 'react';

import Test from '@components/index/Test';

import '../../assets/css/index/main.scss';

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
      </div>
    );
  }
}

export default Main;