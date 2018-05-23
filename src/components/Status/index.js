// @flow

import * as React from 'react';
import { Chip, withStyles } from 'material-ui';
import { compose } from 'recompose';
import styles from './styles';

type Props = {
  children: React.Node,
  classes: Object,
}

const Status = ({ children, ...props }: Props) => {
  const { classes } = props;

  return (
    <Chip
      classes={{
        root: classes.root,
      }}
      label={children}
    />
  );
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(Status);
