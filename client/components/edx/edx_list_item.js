import React, { Component } from 'react';
import BookshelfButton from '../bookshelves/bookshelf_button';

const EdxListItem = ({result, onResultSelect}) => {
  const titleId = result.l;
  const img = 'http://www.edx.org/' + result.image.src;
  const url = result.url;

  return (
      <div className="thumbnail-edx edx">
        <a href={url} target='_blank'>
        <img width='100%' src={img} />
        <span className="caption">
          <h3 className='black'>{titleId}</h3>
        </span>
        </a>
        <div className='link-to '>
          <a className='btn btn-primary' href={url} target= '_blank'>Link to Course</a>
        </div>
      </div>
  );
};

export default EdxListItem;
