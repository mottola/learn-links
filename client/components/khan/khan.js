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
        <div width='100%' className='logo'><a href=       "https://www.khanacademy.org" target='_blank'><img width="200px" src='http://p6.zdassets.com/hc/settings_assets/526991/200061184/xxwUq19WH744A6CARsBwKA-smaller_logo.png'></img></a>
        </div>
      <KhanList
          onResultSelect={selectedResult => this.setState({selectedResult}) }
          results={this.state.results} />
      </div>
    );
  }

  componentWillReceiveProps (props) {
    this.khanSearch(props.term);
  }

}
export default Khan;
