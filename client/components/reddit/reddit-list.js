import React from 'react';
import RedditListItem from './reddit-list-item';

// array.map will loop through an array
const RedditList = (props) => {
  const redditItems = props.children.map((child) => {
    return (
      <RedditListItem
        onThreadSelect={props.onThreadSelect}
        key={child.data.title}
        data={child.data} />
    );
  });

  return (
    <ul className='col-md-4 list-group'>
      {redditItems}
    </ul>
  );
};

export default RedditList;
