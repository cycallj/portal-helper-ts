import React, { Component } from 'react';

import { Button } from 'antd';

let log = (target: any) => {
  console.log(target);
}
// function log(target: any) { // 装饰器：一种语法糖
//   console.log(target);
// }

@log
class Test extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>test12</div>
        <Button type="primary">button</Button>
      </div>
    );
  }
}



export default Test;