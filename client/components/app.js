import React from 'react';
import Header from './header/header';
import Brand from './brand/brand';
import SearchBar from './search-bar/search-bar';
import YouTube from './youtube/youtube';
import Footer from './footer/footer';
// import RedditLinks from './reddit/reddit';
// import CourseraLinks from './coursera/coursera';
// import EdxLinks from './edx/edx';
// import KhanLinks from './khan/khan';
// import StackOverflowLinks from './stack-overflow/stack-overflow';
// import QuoraLinks from './quora/quora';
// import ScholarLinks from './scholar/scholar';
// import AmazonLinks from './amazon/amazon';


export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Brand />
      <YouTube />
      {/*<RedditLinks />
      <EdxLinks />
      <CourseraLinks />
      <EdxLinks />
      <KhanLinks />
      <QuoraLinks />
      <StackOverflowLinks />
      <ScholarLinks />*/}
      {/*<AmazonLinks />*/}
    <Footer />
    </div>
  );
};
