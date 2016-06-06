import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../searchbar/searchbar';
import { Meteor } from 'meteor/meteor';
import EdxList from './edx_list';

class Edx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      selectedResult: null
    };
    this.edxSearch(this.props.term);
    this.edxSearch('learning');
  }

  // catches and loads data before app is rendered to DOM
  edxSearch(term) {
    // closure
    var foo = this;
    // Test axios request
  Meteor.call(`edx`, term, function (error, results) {
    if (!results) {
      return;
    }
    console.log(results);
    // change of state based on API object keys
      foo.setState({
        results: results
      });
  });

  }

  render() {

    return (
      <div className='edx'>
        <h3 className='results'><a href= 'https://www.edx.org/' target='_blank'><span className='reddit-blue'>edX </span></a>Results</h3>
        <EdxList
          onResultSelect={selectedResult => this.setState({selectedResult}) }
          results={this.state.results} />
      </div>
    );
  }

  componentWillReceiveProps (props) {
    this.edxSearch(props.term);
  }

}
export default Edx;
