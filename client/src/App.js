import React from 'react';
import Feed from 'components/Feed';
import SignUp from 'components/SignUp';

import './index.css'

export default () => {
  return (
    <div className='root'>
      <SignUp />
      <h1 data-testid="feed_header">Feed</h1>
      <Feed cool={true} />
    </div>
  );
}
