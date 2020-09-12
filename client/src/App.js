import React from 'react';
import Feed from 'components/Feed';
import SignUp from 'components/SignUp';

export default () => {
  return (
    <div>
      <SignUp />
      <h1 data-testid="feed_header">Powiadomienia</h1>
      <Feed />
    </div>
  );
}
