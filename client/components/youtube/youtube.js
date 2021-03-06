import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../searchbar/searchbar';
import VideoList from './video-list';
import VideoDetail from './video-detail';
const API_KEY = 'AIzaSyDR39QgNOpp7npfTSz5oc1yu5VNUbG33v4';

class YouTube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch(this.props.term);
    this.videoSearch('how to learn');

  }

  videoSearch(term) {
    if (term == '') {
      term = 'how to learn';
    }
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       }); // in ES6 videos replaces { videos: videos }
    });
  }

  componentWillReceiveProps (props) {
    this.videoSearch(props.term);
  }

  render() {

    return (
      <div className='youtube'>
        <div width='100%' className= 'logo'>
          <a href= 'https://www.youtube.com/' target='_blank'><img width='150px' src='https://www.seeklogo.net/wp-content/uploads/2011/02/youtube-logo-vector-400x400.png'></img></a>
        </div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

export default YouTube;
