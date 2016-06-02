import React, { Component } from 'react';
import Header from './header/header';
import Brand from './brand/brand';
import Footer from './footer/footer';
import Bookshelf from './bookshelves/bookshelf';

class Bookshelves extends Component {
  render () {
    return (
      <div>
        <Header />
        <Brand />
        <Bookshelf />
        <Footer />
      </div>
    )
  }
}

export default Bookshelves;
