// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import Transition from 'react-transition-group/Transition';
import styles from './styles';

type Props = {
  classes: Object,
  text: String,
  type: String,
  title: String,
  onClick: Function,
}

const NotificationItem = ({ classes, onClick, title, text, type }: Props) => (
  <Transition
    in
    timeout={5000}
  >
    {state => (
      <li className={`${classes.notification} ${classes[type]} ${classes[state]}`}>
        <div>
          <div className={classes.topLine}>
            <div className={classes.typeText}>{title}</div>
            <div>
              <button
                className={classes.closeButton}
                onClick={onClick}
              >+
              </button>
            </div>
          </div>
          <div>{text}</div>
          <div>{state}</div>
        </div>
      </li>
    )}
  </Transition>
);

NotificationItem.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const enhance = compose(
  injectSheet(styles),
);

export default enhance(NotificationItem);
