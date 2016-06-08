// import _ from 'lodash';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import SearchBar from '../searchbar/searchbar';
// import { Meteor } from 'meteor/meteor';
// import QuoraList from './quora_list';
//
// class Quora extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       results: [],
//       selectedResult: null
//     };
//     this.quoraSearch(this.props.term);
//     this.quoraSearch('learning');
//   }
//
//   // catches and loads data before app is rendered to DOM
//   quoraSearch(term) {
//     // closure
//     var foo = this;
//     // Test axios request
//   Meteor.call(`quora`, term, function (error, results) {
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
//         <h3 className='results'><a href= 'https://www.quora.com/' target='_blank'><span className='quora-red'>Quora</span></a>Results</h3>
//         <QuoraList
//           onResultSelect={selectedResult => this.setState({selectedResult}) }
//           results={this.state.results} />
//       </div>
//     );
//   }
//
//   componentWillReceiveProps (props) {
//     this.quoraSearch(props.term);
//   }
//
// }
// export default Quora;
