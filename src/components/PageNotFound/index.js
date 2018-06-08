// @flow

import React from 'react';
import injectSheet from 'react-jss';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Button } from '../../customizedMuiComponents';
import styles from './styles';

type Props = {
  classes: Object,
  history: Object,
};

const PageNotFound = ({ classes, history }: Props) => (
  <div className={classes.wrapper}>
    <div>
      <h1>Page not found</h1>
      <div className={classes.buttonWrapper}>
        <Button onClick={() => history.goBack()}>Go back</Button>
      </div>
    </div>
  </div>
);

const enhance = compose(
  withRouter,
  injectSheet(styles),
);

export default enhance(PageNotFound);
