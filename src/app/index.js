import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Main, Header } from './../components';
import styles from './styles';

const AppCmp = ({ classes }) => (
  <div className={classes.container}>
    <Header />
    <Main />
  </div>
);

AppCmp.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const App = injectSheet(styles)(AppCmp);

export default App;
