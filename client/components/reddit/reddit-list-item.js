import React from 'react';
import BookshelfButton from '../bookshelves/bookshelf_button';

const RedditListItem = ({data, onChildSelect}) => {
  const titleId = data.title;
  const headerId = data.header_title;
  const descriptionId = data.public_description.substr(0, 200) + '...';
  const img = data.header_img ? data.header_img : 'http://a.thumbs.redditmedia.com/IrfPJGuWzi_ewrDTBlnULeZsJYGz81hsSQoQJyw6LD8.png';
  const url = `https://www.reddit.com${data.url}`;

  return (
      <div className="thumbnail-reddit reddit">
        <a href={url} target='_blank'>
        <img src={img} /></a>
      <span className="caption">
          <h3 className='reddit-blue'>{titleId}</h3>
          <div className='link-to'>
            <a className='btn btn-primary' href={url} target= '_blank'>Link to Subreddit</a>
          </div>
          <h4>{headerId}</h4>
          <p>{descriptionId}</p>
        </span>
      </div>
  );
};

export default RedditListItem;
