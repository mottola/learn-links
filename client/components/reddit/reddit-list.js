import React from 'react';
import RedditListItem from './reddit-list-item';

// array.map will loop through an array
const RedditList = (props) => {
  const redditItems = props.children.map((child) => {
    // filter out adult content
    if (child.data.over18) {
      return null;
    }
      return (
        <div className='col-sm-3' key={child.data.id}>
        <RedditListItem
          onThreadSelect={props.onChildSelect}
          data={child.data} />
        </div>
      );
    });
    return (
        <div className='row'>
           {redditItems}
        </div>
    );
};

export default RedditList;
