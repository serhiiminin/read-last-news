// @flow

import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import styles from './styles';

type Props = {
  classes: Object,
  text: String,
  type: String,
  onClick: Function,
}

const NotificationItem = ({ classes, onClick, text, type }: Props) => (
  <li className={`${classes.notification} ${classes[type]}`}>
    <div>
      <div className={classes.topLine}>
        <div className={classes.typeText}>Type of notification</div>
        <div>
          <button
            className={classes.closeButton}
            onClick={onClick}
          >+
          </button>
        </div>
      </div>
      <div>{text}</div>
    </div>
  </li>
);

NotificationItem.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
const enhance = compose(
  injectSheet(styles),
);

export default enhance(NotificationItem);
