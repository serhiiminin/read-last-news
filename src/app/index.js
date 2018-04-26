// @flow

import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { Main, Header, Sidebar } from './../components';
import styles from './styles';

type Props = {
  classes: Object,
}
const App = ({ classes }: Props) => (
  <div className={classes.container}>
    <Header />
    <Sidebar />
    <Main />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default injectSheet(styles)(App);
