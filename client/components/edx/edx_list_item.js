import React, { Component } from 'react';
import BookshelfButton from '../bookshelves/bookshelf_button';

const EdxListItem = ({result, onResultSelect}) => {
  console.log(result);
  const titleId = result.l;
  const img = result.img;
  const url = result.url;

  return (
      <div className="thumbnail edx">
        <a href={url} target='_blank'>
        <img src={img} />
        <span className="caption">
          <h3 className='reddit-blue'>{titleId}</h3>
          <h4>{img}</h4>
          <p>{url}</p>
        </span>
        </a>
        <BookshelfButton />
      </div>
  );
};

export default EdxListItem;
