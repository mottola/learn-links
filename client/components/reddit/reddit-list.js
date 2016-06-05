import React from 'react';
import RedditListItem from './reddit-list-item';

// array.map will loop through an array
const RedditList = (props) => {
  const redditItems = props.children.map((child) => {
      return (
        <RedditListItem
          onThreadSelect={props.onChildSelect}
          key={child.data.title}
          data={child.data} />
      );
    });
    return (
      <span className='row reddit'>
        <span className='col-sm-3'>{redditItems}</span>
      </span>
    );
};

export default RedditList;
