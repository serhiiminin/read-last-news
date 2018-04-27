// @flow

import React from 'react';
import { ErrorBoundary, NewsList } from './..';

const Main = () => (
  <main>
    <ErrorBoundary>
      <NewsList />
    </ErrorBoundary>
  </main>
);

export default Main;
