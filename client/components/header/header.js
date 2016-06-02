import React, { Component } from 'react';
import Accounts from '../accounts/accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {

  onBookshelfClick(event) {
    event.preventDefault();

    Meteor.call('bookshelves.insert', (error, bookshelfId) => {
      browserHistory.push(`/bookshelves`);
    });
  }

  render() {
    return (
      <nav className='nav navbar-primary'>
        <ul className='nav navbar-nav'>
          <li>
            <a><Accounts /></a>
          </li>
          <li>
            <a href='#' onClick={this.onBookshelfClick.bind(this)}>New Bookshelf</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
