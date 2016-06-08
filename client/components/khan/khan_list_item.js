import React, { Component } from 'react';
import BookshelfButton from '../bookshelves/bookshelf_button';

const KhanListItem = ({result, onResultSelect}) => {
  const titleId = result.l;
  const img = result.img;
  const url = result.url;

  return (
      <div className="thumbnail-edx edx">
        <a href={url} target='_blank'>
        <img src={img} />
        <span className="caption">
          <h3 className='black'>{titleId}</h3>
          <h4>{img}</h4>
          <a href={url} target= '_blank'>Link to Answer</a>
        </span>
        </a>
        <BookshelfButton />
      </div>
  );
};

export default KhanListItem;
