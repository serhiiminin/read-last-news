// @flow

import React from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import styles from './styles';

type Props = {
  classes: Object,
}
const Header = (props: Props) => {
  const { classes } = props;

  return (
    <header className={classes.header}>
      <h1>Read last news</h1>
    </header>
  );
};

const enhance = compose(
  injectSheet(styles),
);

export default enhance(Header);
