// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import styles from './styles';

type Props = {
  classes: Object,
}

const NotificationItem = ({ classes }: Props) => (
  <li className={classes.notification}>
    Notification
  </li>
);

NotificationItem.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const enhance = compose(
  injectSheet(styles),
);

export default enhance(NotificationItem);
