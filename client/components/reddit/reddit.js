// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import SearchBar from '../search-bar/search-bar';
// import RedditList from './reddit-list';
// import RedditDetail from './reddit-detail';
// import Nraw from 'nraw';
//
// class Reddit extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       titles: [],
//       selectedTitle: null
//     };
//     this.redditSearch(this.props.term);
//     this.redditSearch('how to learn');
//   }
//
//   redditSearch(term) {
//     console.log(term);
//     Nraw.search('algorithms').exec(function(term) {
//       console.log(data);
//     });
//   }
//
//
//   componentWillReceiveProps (props) {
//     this.redditSearch(props.term);
//   }
//
//   render() {
//
//     return (
//       <div className='reddit'>
//         <h3 className='results'><a href= 'https://www.reddit.com/' target='_blank'><span className='youtube-red'>YouTube </span></a>Results</h3>
//         <RedditDetail title={this.state.selectedThread} />
//         <RedditList
//           onThreadSelect={selectedThread => this.setState({selectedThread}) }
//           titles={this.state.titles} />
//       </div>
//     );
//   }
// }
//
// export default Reddit;
