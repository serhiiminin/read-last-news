// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';


const root = window.document.getElementById('root');

ReactDOM.render(<Root />, root);
registerServiceWorker();
