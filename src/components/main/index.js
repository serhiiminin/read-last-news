// @flow

import React from 'react';
import { ErrorBoundary, NewsList } from './..';

const Main = () => (
  <ErrorBoundary>
    <NewsList />
  </ErrorBoundary>
);

export default Main;
