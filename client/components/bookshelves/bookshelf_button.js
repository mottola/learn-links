import React, { Component } from 'react';
import Accounts from '../accounts/accounts';
import { Link, browserHistory } from 'react-router';

class BookshelfButton extends Component {


  onBookshelfClick(event) {
    event.preventDefault();

    Meteor.call('bookshelves.insert');
  }

  render() {
    return (
      <div>
          <form>
            <label>
              <input className='shelf' list="bookshelves" name="userBookshelves" placeholder='Choose or Create Bookshelf'/></label>
              <datalist id="bookshelves">
              <option value="Physics" type='checkbox'></option>
              <option value="Math"></option>
              <option value="Javascript"></option>
              <option value="Machine Learning"></option>
              <option value="Chemistry"></option>
              <option value="Python"></option>
              <option value='New Bookshelf' type='text' id='bookshelves' placeholder='New bookshelf'></option>
              </datalist>
              <button onClick={this.onBookshelfClick.bind(this)} className='btn btn-primary btn-md'>Add to Bookshelf</button>
          </form>
      </div>
    );
  }
}
export default BookshelfButton;
