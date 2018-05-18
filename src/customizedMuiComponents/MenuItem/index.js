// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { MenuItem, withStyles } from 'material-ui';
import styles from './styles';

const MenuItemCustomized = (props: Object) => {
  const { classes } = props;

  return (
    <MenuItem
      {...props}
      classes={{
        root: classes.root,
      }}
    />
  );
};

MenuItemCustomized.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(MenuItemCustomized);
