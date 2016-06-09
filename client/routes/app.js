import React, { Component } from 'react';
// import BookshelfButton from './bookshelf-button/bookshelf-button';
import Header from '../components/header/header';
import Brand from '../components/brand/brand';
import SearchBar from '../components/searchbar/searchbar';
import YouTube from '../components/youtube/youtube';
import Footer from '../components/footer/footer';
import Reddit from '../components/reddit/reddit';
// import CourseraLinks from './coursera/coursera';
import Edx from '../components/edx/edx';
import Khan from '../components/khan/khan';
// import StackOverflow from '../components/stack_overflow/stack_overflow';
// import Quora from '../components/quora/quora';
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
      <div className='container-fluid'>
      <YouTube term={this.state.term} />
      </div>
      <Edx term={this.state.term} />
      <Reddit term={this.state.term} />
      <Khan term={this.state.term} />
      {/*<StackOverflow term={this.state.term} />
      <Quora term={this.state.term} />*/}
      {/*<CourseraLinks />
      <ScholarLinks />
      <AmazonLinks />*/}
      <Footer />
    </div>
  );
 }
};

export default App;
