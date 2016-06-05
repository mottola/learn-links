import React from 'react';
import VideoListItem from './video-list-item';

// array.map will loop through an array
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className='col-sm-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;
