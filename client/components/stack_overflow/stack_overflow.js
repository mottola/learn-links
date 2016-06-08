// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import SearchBar from '../searchbar/searchbar';
// import { Meteor } from 'meteor/meteor';
// import StackList from './stack_list';
//
// class StackOverflow extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       results: [],
//       selectedResult: null
//     };
//     this.stackSearch(this.props.term);
//     this.stackSearch('learning');
//   }
//
//   // catches and loads data before app is rendered to DOM
//   stackSearch(term) {
//     // closure
//     var foo = this;
//     // Test axios request
//   Meteor.call(`stackOverflow`, term, function (error, results) {
//     if (!results) {
//       return;
//     }
//     // change of state based on API object keys
//       foo.setState({
//         results: results
//       });
//   });
//
//   }
//
//   render() {
//
//     return (
//       <div>
//         <h3 className='results'><a href= 'https://www.stackoverflow.com/' target='_blank'><span className='stack-orange'>Stack Overflow</span></a>Results</h3>
//         <StackList
//           onResultSelect={selectedResult => this.setState({selectedResult}) }
//           results={this.state.results} />
//       </div>
//     );
//   }
//
//   componentWillReceiveProps (props) {
//     this.stackSearch(props.term);
//   }
//
// }
// export default StackOverflow;
