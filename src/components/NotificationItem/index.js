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
  title: String,
  status: String,
  onClick: Function,
}

const NotificationItem = ({ classes, onClick, title, text, type, status }: Props) => (
  <li className={`${classes.notification} ${classes[type]} ${classes[status]}`}>
    <div>
      <div className={classes.topLine}>
        <div className={classes.typeText}>{title}</div>
        <div className={classes.wrapperCloseButton}>
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
