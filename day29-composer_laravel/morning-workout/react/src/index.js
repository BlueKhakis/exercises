import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Celebrities from "./Celebrities/Celebrities";

ReactDOM.render(
  <React.StrictMode>
      <Celebrities
          url="http://celebrities-api.test/"
      />
  </React.StrictMode>,
  document.getElementById('root')
);
