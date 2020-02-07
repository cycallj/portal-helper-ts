import React, { Component } from 'react';

let log = (target: any) => {
  console.log(target);
}
// function log(target: any) {
//   console.log(target);
// }

@log
class Test extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>test12</div>
    );
  }
}



export default Test;