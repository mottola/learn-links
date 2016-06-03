import React from 'react';

const RedditDetail = ({title}) => {
  if(!title){
    return <div>Loading...</div>;
  }
  // const titleId = data.id.title;
  const url = `https://www.reddit.com/search.json?q=${titleId}&limit=5`;

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
        <button className='btn btn-primary btn-md'>Add to Bookshelf</button>
    </div>
  );
};

export default RedditDetail;
