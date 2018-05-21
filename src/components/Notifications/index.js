// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import uuid from 'uuid';
import { NotificationItem } from './..';
import styles from './styles';

type State = {
  errors: Object,
}
type Props = {
  classes: Object,
}

const NOTIFICATION_TIMEOUT: number = 5000;

class Notifications extends React.Component<Props, State> {
  state = {
    errors: {},
  };
  componentDidCatch(error: Object, info: Object) {
    const id = uuid();

    console.log(error, info);
    this.setState({ errors: {
      ...this.state.errors,
      [id]: error,
    } });
    setTimeout(() => {}, NOTIFICATION_TIMEOUT);
  }
  render() {
    const { classes } = this.props;

    console.log(this.state.errors);
    return (
      <ul className={classes.notifications}>
        <NotificationItem />
      </ul>
    );
  }
}

Notifications.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const enhance = compose(
  injectSheet(styles),
);

export default enhance(Notifications);
