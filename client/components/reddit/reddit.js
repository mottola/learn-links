import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../searchbar/searchbar';
import axios from 'axios';
import RedditList from './reddit-list';
// import RedditDetail from './reddit-detail';

class Reddit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: [],
      selectedChild: null
    };
    this.redditSearch(this.props.term);
    this.redditSearch('learn');
  }

  // catches and loads data before app is rendered to DOM
  redditSearch(term) {
    // Test axios request
    axios.get(`https://www.reddit.com/subreddits/search.json?q=${term}&limit=4`)
      // change of state based on API object keys
      .then(response => {
        if (!response.data.data) {
          return;
        }
        this.setState({
          children: response.data.data.children
        });
      })
  }

  componentWillReceiveProps (props) {
    this.redditSearch(props.term);
  }

  render() {

    return (
        <div>
          <div width='100%' className='logo'><a href= "https://www.reddit.com/subreddits/" target='_blank'><img width="200px" src='http://cdn.bleedingcool.net/wp-content/uploads/2014/11/reddit-logo.png'></img></a>
        </div>
        <RedditList
          onChildSelect={selectedChild => this.setState({selectedChild}) }
          children={this.state.children} />
      </div>
    );
  }
}

export default Reddit;
