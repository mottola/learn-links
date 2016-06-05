// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import SearchBar from '../searchbar/searchbar';
// import VideoList from './video_list';
// import VideoDetail from './video_detail';
//
// class Edx extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       children: [],
//       selectedChild: null
//     };
//     this.redditSearch(this.props.term);
//     this.redditSearch('learning');
//   }
//
//   // catches and loads data before app is rendered to DOM
//   redditSearch(term) {
//     // Test axios request
//     axios.get(`https://www.edx.org/course?search_query=algebra`)
//       // change of state based on API object keys
//       .then(response => {
//         console.log(response);
//         this.setState({
//           children: response.data.data.children
//         });
//       })
//   }
//
//   componentWillReceiveProps (props) {
//     this.redditSearch(props.term);
//   }
//
//   render() {
//
//     return (
//       <div className='reddit'>
//         <h3 className='results'><a href= 'https://www.reddit.com/' target='_blank'><span className='reddit-blue'>Reddit </span></a>Results</h3>
//         <RedditDetail child={this.state.selectedChild} />
//         <RedditList
//           onChildSelect={selectedChild => this.setState({selectedChild}) }
//           children={this.state.children} />
//       </div>
//     );
//   }
// }
//
// export default Edx;
