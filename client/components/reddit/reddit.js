import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../search-bar/search-bar';
import axios from 'axios';
import RedditList from './reddit-list';
import RedditDetail from './reddit-detail';
// const url =  "https://www.reddit.com/search.json?q=javascript&limit=5";

class Reddit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: [],
      selectedTitle: null
    };
    this.redditSearch(this.props.term);
    this.redditSearch('how to learn');
  }

  // catches and loads data before app is rendered to DOM
  redditSearch(term) {
    // Test axios request
    axios.get('https://www.reddit.com/search.json?q=' + term + '&limit=5')

      // change of state based on API object keys
      .then(response => {
        console.log(response.data.data.children);
        this.setState({
          children: response.data.data.children
        });
      })
      // .catch(response => {
      //   console.log(response);
      // });
  }
  // this.setState({ images: response.data.data })
  componentWillReceiveProps (props) {
    this.redditSearch(props.term);
  }
  
  render() {

    return (
      <div className='reddit'>
        <h3 className='results'><a href= 'https://www.reddit.com/' target='_blank'><span className='reddit-blue'>Reddit </span></a>Results</h3>
        <RedditDetail title={this.state.selectedThread} />
        <RedditList
          onThreadSelect={selectedThread => this.setState({selectedThread}) }
          children={this.state.children} />
      </div>
    );
  }
}

export default Reddit;
