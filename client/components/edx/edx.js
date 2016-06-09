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
    // change of state based on API object keys
      foo.setState({
        results: results
      });
  });

  }

  render() {

    return (
      <div className= 'space'>
      <div width='100%' className= 'logo'>
        <a href= 'https://www.edx.org/' target='_blank'><img src='https://www.edx.org/sites/default/files/theme/edx-logo-header.png'></img></a>
      </div>

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
