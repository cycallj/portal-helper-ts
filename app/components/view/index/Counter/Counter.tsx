import React from 'react';
import { inject, observer } from 'mobx-react';
import { hot } from 'react-hot-loader';

import { ComponentExt } from '@utils/reactExt';

interface IProps {
  globalStore?: IGlobalStore.GlobalStore
}

@hot(module)
@inject('globalStore')
@observer
class Counter extends ComponentExt<IProps> {

  increase = () => {
    this.props.globalStore.increase(1);
  }

  decrease = () => {
    this.props.globalStore.decrease(1);
  }
  
  render() {
    console.log(this.props)
    const { num } = this.props.globalStore;
    return (
      <div>
        <div>{num}</div>
        <button onClick={this.increase}>增加</button>
        <button onClick={this.decrease}>减少</button>
      </div>
    );
  }
}

export default Counter;