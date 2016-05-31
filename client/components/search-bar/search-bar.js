import React, { Component } from 'react';
import YouTube from '../youtube/youtube';
import YTSearch from 'youtube-api-search';
import VideoList from '../youtube/video-list';
import VideoListItem from '../youtube/video-list-item';
import VideoDetail from '../youtube/video-detail';


// declare new class-based component and add state/render/watcher functions
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 1000);

    return (

      <div className='search-bar'>
        <input
          placeholder='What would like to learn about?'
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
    this.state = { term: '' };
  }
}

// allows files that use 'import SearchBar' to use this const
export default SearchBar;
