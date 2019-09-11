import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";
import VideoDetail from "./components/video_detail";
import _ from "lodash";
const API_KEY = "AIzaSyCvhNoW7jCyF0oxXJKryUjvTPvi0KgNlKI";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surf");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos =>
      this.setState({ videos: videos, selectedVideo: videos[0] })
    );
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}></SearchBar>
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        ></VideoList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

console.log("Estoy aqui");
