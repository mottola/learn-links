import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { BookshelfCollection } from '../../../imports/collections/bookshelves-collection';
import { Link } from 'react-router';
import BookshelfList from './bookshelf_list';

class BookshelfViewer extends Component {
  render () {

    return (
      <div className='col-xs-4'>
        <h5>Output</h5>
        <div>{this.props.bookshelf.content}></div>
      </div>
    );
  }
}

export default BookshelfViewer;
