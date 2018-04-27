// @flow

import PropTypes from 'prop-types';
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import App from './../app';
import styles from './styles';

type Props = {
  classes: Object,
}

const Root = ({ classes }: Props) => (
  <div className={classes.root}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </div>
);

Root.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default injectSheet(styles)(Root);
