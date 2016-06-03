import React from 'react';
import RedditListItem from './reddit-list-item';

// array.map will loop through an array
const RedditList = (props) => {
  const redditItems = props.titles.map((title) => {
    return (
      <RedditListItem
        onThreadSelect={props.onThreadSelect}
        key={data.title}
        title={title} />
    );
  });

  return (
    <ul className='col-md-4 list-group'>
      {redditItems}
    </ul>
  );
};

export default RedditList;
