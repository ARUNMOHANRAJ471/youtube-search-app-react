import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = <your-api-key>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('ksrce');
  }
  videoSearch(term) {
    let context = this;
    YTSearch({key:API_KEY, term: term},function(videos) {
      context.setState({videos,selectedVideo: videos[0]});
    });
  }
  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300);
      return (
      <div>
        <SearchBar onSearchItemChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onSelectedVideo={selectedVideo => this.setState({selectedVideo})}/>
      </div>);
  }
}


ReactDOM.render(<App />,document.querySelector('.container'));
