import React from 'react';
import './App.css';
import Feed from 'components/Feed';

export default () => {
  return (
    <div className="App">
      <h1 data-testid="feed_header">Powiadomienia</h1>
      <Feed/>
    </div>
  );
}
