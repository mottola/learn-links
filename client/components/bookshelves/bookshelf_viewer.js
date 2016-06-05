import React, { Component } from 'react';

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
