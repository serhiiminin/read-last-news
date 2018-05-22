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
  _showNotification = (error: { response: Object, message: ?String }) => {
    const id = uuid();

    this.setState({ errors: {
      ...this.state.errors,
      [id]: (error.response && error.response.statusText) || error.message,
    } });
    setTimeout(() => this.setState(prevState => {
      const prevErrors = { ...prevState }.errors;

      delete prevErrors[id];
      return {
        errors: prevErrors,
      };
    }), NOTIFICATION_TIMEOUT);
  };
  _hideNotification = (id: String) => {
    this.setState(prevState => {
      const prevErrors = { ...prevState }.errors;

      delete prevErrors[id];
      return {
        errors: prevErrors,
      };
    });
  };
  render() {
    const { classes, children } = this.props;
    const notifications: Array<[string, mixed]> = Object.entries(this.state.errors);

    return (
      <React.Fragment>
        <NotificationsContext.Provider
          value={{ showNotification: this._showNotification }}
        >
          { children }
        </NotificationsContext.Provider>
        <ul className={classes.notifications}>
          {notifications.map(([id, value]) => (
            <NotificationItem
              type="error"
              text={value}
              key={id}
              onClick={() => this._hideNotification(id)}
            />
          ))}
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
