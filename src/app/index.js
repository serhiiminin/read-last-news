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
    <div className={classes.content}>
      <div className={classes.content__sidebar}>
        <Sidebar />
      </div>
      <div className={classes.content__main}>
        <Main />
      </div>

    </div>

  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default injectSheet(styles)(App);
