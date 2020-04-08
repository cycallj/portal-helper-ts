import React from 'react';
import ReactDOM from 'react-dom';

import Main from '@view/index/Main';

const render = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  )
}

render();