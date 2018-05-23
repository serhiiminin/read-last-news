// @flow

import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Main, Header, Sidebar, Footer, ErrorBoundary } from './../components';
import styles from './styles';

type Props = {
  classes: Object,
}
const App = ({ classes }: Props) => (
  <div className={classes.container}>
    <Header />
    <div className={classes.content}>
      <ErrorBoundary>
        <div className={classes.content__sidebar}>
          <Sidebar />
        </div>
        <div className={classes.content__main}>
          <Main />
        </div>
      </ErrorBoundary>
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  injectSheet(styles),
);

export default enhance(App);
