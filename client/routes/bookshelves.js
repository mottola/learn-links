import React, { Component } from 'react';
import Header from '../components/header/header';
import Brand from '../components/brand/brand';
import Footer from '../components/footer/footer';
import BookshelfList from '../components/bookshelves/bookshelf_list';
import BookshelfViewer from '../components/bookshelves/bookshelf_viewer';
import Bookshelf from '../components/bookshelves/bookshelf';


class Bookshelves extends Component {
  render () {
    return (
      <div>
        <Header />
        <Brand />
        <Bookshelf />
        <BookshelfList />
        <BookshelfViewer />
        <Footer />
      </div>
    );
  }
}

export default Bookshelves;
