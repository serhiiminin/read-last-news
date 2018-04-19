import React from 'react';
import PropTypes from 'prop-types';
import App from './../app';

const Root = ({ classes }) => (
  <div className={classes.container}>
    <App />
  </div>
);

Root.propTypes = {
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
Root.defaultProps = {
  classes: null,
};

export default Root;
