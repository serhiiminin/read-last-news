// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, withStyles } from 'material-ui';
import { compose } from 'recompose';
import styles from './styles';

type Props= {
  classes: Object,
}

const CustomizedCircularProgress = ({ classes, ...restProps }: Props) => (
  <CircularProgress
    {...restProps}
    classes={{
      root: classes.root,
    }}
  />
);

CustomizedCircularProgress.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const enhance = compose(
  withStyles(styles),
);

export default enhance(CustomizedCircularProgress);
