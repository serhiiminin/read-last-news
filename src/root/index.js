// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { Notifications, PageNotFound } from '../components';
import variables from '../styles/variables';
import App from './../app';
import styles from './styles';

type Props = {
  classes: Object,
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: variables.colors.messages,
      main: variables.colors.background,
      dark: variables.colors.actions,
      contrastText: variables.colors.text,
    },
  },
});

const Root = ({ classes }: Props) => (
  <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <Notifications>
        <Router>
          <Switch>
            <Route path="/" exact component={App} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </Notifications>
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
