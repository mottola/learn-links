import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookshelves } from '../../../imports/collections/bookshelves';
import BookshelfViewer from './bookshelf_viewer';

class BookshelfMain extends Component {
  render() {
    if (!this.props.bookshelf) { return <div>Loading...</div>; }

    return (
      <div>
        <BookshelfViewer bookshelf={this.props.bookshelf} />
        <BookshelfList bookshelf={this.props.bookshelf} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { bookshelfId } = props.params;
  Meteor.subscribe('bookshelves');

  return { bookshelf: Bookshelves.findOne(bookshelfId) };
}, BookshelfMain);
