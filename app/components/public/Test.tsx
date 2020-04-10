import React from 'react';

import { Button } from 'antd';

import { ComponentExt } from '@utils/reactExt';

const log = (target: any) => {
  console.log(target);
};

@log // 装饰器：一种语法糖
class Test extends ComponentExt {
  constructor(props: any) {
    super(props);
  }

  showMsg = () => {
    this.$message.success('这是一个通知');
  }

  render() {
    return (
      <div>
        <div>test12</div>
        <Button type="primary" onClick={this.showMsg}>button</Button>
      </div>
    );
  }
}



export default Test;