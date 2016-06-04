import React, { Component } from 'react';
// import BookshelfButton from './bookshelf-button/bookshelf-button';
import Header from '../components/header/header';
import Brand from '../components/brand/brand';
import SearchBar from '../components/search-bar/search-bar';
import YouTube from '../components/youtube/youtube';
import Footer from '../components/footer/footer';
// import BookshelfCreateMenu from './bookshelf-button/bookshelf-create-menu';
import Reddit from '../components/reddit/reddit';
// import CourseraLinks from './coursera/coursera';
// import EdxLinks from './edx/edx';
// import KhanLinks from './khan/khan';
// import StackOverflowLinks from './stack-overflow/stack-overflow';
// import QuoraLinks from './quora/quora';
// import ScholarLinks from './scholar/scholar';
// import AmazonLinks from './amazon/amazon';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
}

  onSearchTermChange (term) {
    this.setState({ term });
  }

  render () {
  return (
    <div>
      <Header />
      {this.props.children}
      <Brand />
      <SearchBar onSearchTermChange={this.onSearchTermChange.bind(this)} term={this.state.term} />
      <YouTube term={this.state.term} />
      <Reddit term={this.state.term} />
      {/*<BookshelfCreateMenu />*/}
      {/*<BookshelfButton />*/}

      {/*<EdxLinks />
      <CourseraLinks />
      <EdxLinks />
      <KhanLinks />
      <QuoraLinks />
      <StackOverflowLinks />
      <ScholarLinks />
      <AmazonLinks />*/}
      <Footer />
    </div>
  );
 }
};

export default App;
