import React from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import Root from './root';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles';

const RootCmp = injectSheet(styles)(Root);

ReactDOM.render(<RootCmp />, document.getElementById('root'));
registerServiceWorker();
