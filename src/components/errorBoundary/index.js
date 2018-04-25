// @flow

import * as React from 'react';
import PropTypes from 'prop-types';

type Props = {
  children? : React.Node,
};

type State = {
  hasError: boolean,
}

class ErrorBoundary extends React.Component<Props, State> {
  static propTypes = {
    children: PropTypes.node,
  };
  static defaultProps = {
    children: null,
  };
  state = {
    hasError: false,
  };

  componentDidCatch(error: Object, info: Object) {
    console.log(error, info);
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError
      ? <h1>Something went wrong.</h1>
      : this.props.children;
  }
}


export default ErrorBoundary;
