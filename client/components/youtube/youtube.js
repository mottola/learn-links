import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from '../search-bar/search-bar';
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
    this.videoSearch('how to learn');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       }); // in ES6 videos replaces { videos: videos }
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 1000);

    return (
      <div className='youtube'>
        <SearchBar onSearchTermChange={videoSearch} />
        <h3 className='results'><span className='youtube-red'>YouTube</span> Results</h3>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

export default YouTube;
