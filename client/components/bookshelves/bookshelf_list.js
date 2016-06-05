import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bookshelves } from '../../../imports/collections/bookshelves';
import { Link } from 'react-router';

class BookshelfList extends Component {

  onBookshelfRemove(bookshelf) {
    Meteor.call('bookshelves.remove', bookshelf);
  }

  renderList() {
    return this.props.bookshelves.map(bookshelf => {
      const url = `/bookshelves/${bookshelf._id}`;
      return (
        <li className='list-group-item' key={bookshelf._id}>
          <Link to={url}> Bookshelf {bookshelf._id}</Link>
          <span className='pull-right'>
            <button
              className='btn btn-danger'
              onClick={() => this.onBookshelfRemove(bookshelf)}>
              Delete
            </button>
          </span>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group'>
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('bookshelves');

  return { bookshelves: Bookshelves.find({}).fetch() };
}, BookshelfList);
