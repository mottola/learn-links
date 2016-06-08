import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../searchbar/searchbar';
import { Meteor } from 'meteor/meteor';
import KhanList from './khan_list';

class Khan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      selectedResult: null
    };
    this.khanSearch(this.props.term);
    this.khanSearch('learning');
  }

  // catches and loads data before app is rendered to DOM
  khanSearch(term) {
    // closure
    var foo = this;
    // Test axios request
  Meteor.call(`khan`, term, function (error, results) {
    if (!results) {
      return;
    }
    // change of state based on API object keys
      foo.setState({
        results: results
      });
  });

  }

  render() {

    return (
      <div>
        <h3 className='results'><a href= 'https://www.khanacademy.org/' target='_blank'><span className='khan-green'>Khan Academy</span></a>Results</h3>
        <QuoraList
          onResultSelect={selectedResult => this.setState({selectedResult}) }
          results={this.state.results} />
      </div>
    );
  }

  componentWillReceiveProps (props) {
    this.quoraSearch(props.term);
  }

}
export default Khan;
