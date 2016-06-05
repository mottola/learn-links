import React from 'react';
import BookshelfButton from '../bookshelves/bookshelf_button';

const RedditListItem = ({data, onChildSelect}) => {
  console.log(data);
  const titleId = data.title;
  const headerId = data.header_title;
  const descriptionId = data.public_description;
  const img = data.header_img;
  const url = `https://www.reddit.com${data.url}`;

  return (
    <span>
      <span className="thumbnail reddit">
        <a href={url} target='_blank'>
        <img src={img} />
        <span className="caption">
          <h3 className='reddit-blue'>{titleId}</h3>
          <h4>{headerId}</h4>
          <p>{descriptionId}</p>
        </span>
        </a>
        <BookshelfButton />
      </span>
    </span>

  );
};

export default RedditListItem;
