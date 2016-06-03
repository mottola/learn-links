import React, { Component } from 'react';

class BookshelfButton extends Component {

  addBookshelf () {
    console.log('clicked');
    return 'text';
  }

  render() {
    return (
      <div>
        <button onClick={this.addBookshelf} className='btn btn-primary btn-md'>Add to Bookshelf</button>
        <input type={this.addBookshelf} placeholder='create new bookshelf'></input>
      </div>
    );
  }
}
export default BookshelfButton;
