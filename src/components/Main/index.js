// @flow

import React from 'react';
import { ErrorBoundary, NewsList, NotificationsContext } from './..';

const Main = () => (
  <main>
    <ErrorBoundary>
      <NotificationsContext.Consumer>
        {showNotification => (
          <NewsList showNotification={showNotification} />
        )}
      </NotificationsContext.Consumer>

    </ErrorBoundary>
  </main>
);

export default Main;
