import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { BookshelfCollection } from '../../../imports/collections/bookshelves-collection';
import BookshelvesViewer from './bookshelf_viewer';
import BookshelfList from './bookshelf_list';

class Bookshelf extends Component {
  render() {
    if (!this.props.bookshelf) { return <div>Loading...</div>; }

    return (
      <div>
        <BookshelvesViewer bookshelf={this.props.bookshelf} />
        <BookshelfList />
      </div>
    );
  }
}

// export default createContainer((props) => {
//   Meteor.subscribe('bookshelves-collection');
//   const bookshelfId = 0;
//   if (bookshelfId) {
//     return { bookshelf: Bookshelves.findOne(bookshelfId) };
//   } else {

  // }
// }, Bookshelf) ;
export default Bookshelf;
