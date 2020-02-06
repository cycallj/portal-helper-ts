import React from 'react';
import ReactDOM from 'react-dom';

import Main from '../components/index/Main';

const render = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('app')
  )
}

render();