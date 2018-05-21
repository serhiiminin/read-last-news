// @flow

import PropTypes from 'prop-types';
import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { Notifications } from '../components';
import App from './../app';
import styles from './styles';

type Props = {
  classes: Object,
}

const theme = createMuiTheme();

const Root = ({ classes }: Props) => (
  <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Route path="/" component={App} />
      </Router>
      <Notifications />
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
