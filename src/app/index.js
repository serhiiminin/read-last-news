// @flow

import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Main, Header, Sidebar, Footer } from './../components';
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
      <Footer />
    </div>

  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  injectSheet(styles),
);

export default enhance(App);
