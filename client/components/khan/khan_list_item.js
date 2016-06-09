import React, { Component } from 'react';
import BookshelfButton from '../bookshelves/bookshelf_button';

const KhanListItem = ({result, onResultSelect}) => {
  const titleId = result.name;
  const img = result.thumb;
  const url = `https://www.khanacademy.org${result.url}`;

  return (
      <div className="thumbnail-khan khan">
        <a href={url} target='_blank'>
        <img src={img} width='100%' />
        <span className="caption">
          <h3 className='black'>{titleId}</h3>
        <div className='link-to '>
          <a className='btn btn-primary' href={url} target= '_blank'>Link to Video</a>
        </div>
        </span>
        </a>
      </div>
  );
};

export default KhanListItem;
