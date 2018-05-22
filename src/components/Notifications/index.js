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
  children: React.Node,
}

const NOTIFICATION_TIMEOUT: number = 5000;

const NotificationsContext = React.createContext();

class Notifications extends React.Component<Props, State> {
  state = {
    errors: {},
  };
  _showNotification = (error: Error) => {
    const id = uuid();

    console.log(error);
    this.setState({ errors: {
      ...this.state.errors,
      [id]: error,
    } });
    setTimeout(() => 'Hide notification', NOTIFICATION_TIMEOUT);
  };
  render() {
    const { classes, children } = this.props;

    return (
      <React.Fragment>
        <NotificationsContext.Provider showNotification={this._showNotification}>
          { children }
        </NotificationsContext.Provider>
        <ul className={classes.notifications}>
          <NotificationItem />
        </ul>
      </React.Fragment>

    );
  }
}

Notifications.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const enhance = compose(
  injectSheet(styles),
);

export { NotificationsContext };

export default enhance(Notifications);
