// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { Transition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import variables from '../../styles/variables';
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
  _hideNotification = (id: ?String) => {
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
          <TransitionGroup>
            {notifications.map(([id, value]) => (
              <Transition
                timeout={variables.timeout.notification}
                unmountOnExit
                key={id}
              >
                {status => (
                  <NotificationItem
                    title="Oops"
                    type="error"
                    text={value}
                    key={id}
                    status={status}
                    onClick={() => this._hideNotification(id)}
                  />
                )}

              </Transition>
            ))}
          </TransitionGroup>
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
