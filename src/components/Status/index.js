// @flow

import * as React from 'react';
import { Chip } from 'material-ui';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import styles from './styles';

type Props = {
  children: React.Node,
}

const Status = ({ children }: Props) => (
  <Chip
    {...styles}
  >
    {children}
  </Chip>
);

const enhance = compose(
  injectSheet(styles),
);

export default enhance(Status);
