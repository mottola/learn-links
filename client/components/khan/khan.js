// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import SearchBar from '../search-bar/search-bar';
// import VideoList from './video-list';
// import VideoDetail from './video-detail';
// import axios from 'axios';
// const KHAN_API = `http://www.khanacademy.org/api/v1/videos/${term}`;

// https://www.khanacademy.org/search?referer=%2F&page_search_query=Algorithms
//
// class KhanLinks extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       videos: [],
//       selectedVideo: null
//     };
//     this.videoSearch('learning');
//   }
//
//   videoSearch(term) {
//     KhanSearch({key: KHAN_API, term: term}, (videos) => {
//       this.setState({
//         videos: videos,
//         selectedVideo: videos[0]
//        }); // in ES6 videos replaces { videos: videos }
//     });
//   }
//
//   render() {
//     const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 1000);
//
//     return (
//       <div>
//         <SearchBar onSearchTermChange={videoSearch} />
//         <h3 className='results'><span className='khan-green'>Khan</span> Results</h3>
//         <VideoDetail video={this.state.selectedVideo} />
//         <VideoList
//           onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
//           videos={this.state.videos} />
//       </div>
//     );
//   }
// }
//
// export default KhanLinks;
