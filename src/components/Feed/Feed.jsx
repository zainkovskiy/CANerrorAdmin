import React from 'react';

import { FeedItem } from 'components/FeedItem';

import './Feed.scss';

export function Feed({ data, currentFeed, setCurrentFeed }) {
  return (
    <div className="feed">
      {
        data.length > 0 &&
        data.map((feed, idx) =>
          <FeedItem
            isActive={currentFeed?.type === feed.type ? 'feed-item_active' : ''}
            feed={feed}
            key={idx}
            setCurrentFeed={setCurrentFeed}
          />)
      }
    </div>
  )
}