// @flow

import PropTypes from 'prop-types';
import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import App from './../app';
import styles from './styles';

type Props = {
  classes: Object,
}

const Root = ({ classes }: Props) => (
  <div className={classes.root}>
    <MuiThemeProvider>
      <Router>
        <Route path="/:countryId?" component={App} />
      </Router>
    </MuiThemeProvider>
  </div>
);

Root.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  injectSheet(styles),
);

export default enhance(Root);
