import React, { Component } from 'react';
// import BookshelfCreateMenu from './bookshelf-create-menu';


class BookshelfButton extends Component {

  addBookshelf(bookshelf) {
    console.log('Bookshelf clicked');
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
              <button onClick={this.onBookshelfClick} className='btn btn-primary btn-md'>Add to Bookshelf</button>
          </form>
      </div>
    );
  }
}
export default BookshelfButton;
