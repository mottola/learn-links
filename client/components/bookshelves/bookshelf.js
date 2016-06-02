import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookshelves } from '../../../imports/collections/bookshelves';
import BookshelvesViewer from './bookshelf_viewer';

class Bookshelf extends Component {
  render() {
    if (!this.props.bookshelf) { return <div>Loading...</div>; }

    return (
      <div>
        <BookshelvesViewer bookshelf={this.props.bookshelf} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { bookshelfId } = props.params;
  Meteor.subscribe('bookshelves');

  return { bookshelf: Bookshelves.findOne(bookshelfId) };
}, Bookshelf) ;
