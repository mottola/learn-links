import React from 'react';

const RedditListItem = ({title, onThreadSelect}) => {
  const threadUrl = data.title.url;

  return (
    <li onClick={() => onThreadSelect(title)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={threadUrl}/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{data.title}</div>
        </div>
      </div>
    </li>
  );
};

export default RedditListItem;
