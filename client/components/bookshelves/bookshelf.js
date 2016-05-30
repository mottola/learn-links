import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';


class BookshelfMain extends Component {
  render() {
    if (!this.props.bookshelf) { return <div>Loading...</div>; }

    return (
      <div>
        <BookshelfEditor bin={this.props.bin} />
        <BookshelfViewer bin={this.props.bin} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { bookshelfId } = props.params;
  Meteor.subscribe('bins');

  return { bookshelf: Bookshelves.findOne(bookshelfId) };
}, BookshelfMain) ;
