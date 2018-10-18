import React, { Component } from "react";
import VideoPlayer from "./components/VideoPlayer";
import SearchBox from "./components/SearchBox";
import Description from "./components/Description";
import PlayList from "./components/PlayList";
import Particles from "react-particles-js";
import config from "./particles-js-config";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyD2KqpmlAQhGkF-QvcsWQtxA9Xbydz4MkY";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList: [],
      currentVedio: {
        id: "",
        title: "",
        url: "",
        description: ""
      }
    };
    this.search(null);
    this.searchInput = React.createRef();
    this.search = this.search.bind(this);
    this.setVedioList = this.setVedioList.bind(this);
    this.setCurrentVedio = this.setCurrentVedio.bind(this);
  }
  search(event) {
    let term = "";
    if (event) {
      term = this.searchInput.current.value;
    }
    term ? (term = term + "") : (term = "ReactJS");
    YTSearch({ key: API_KEY, term: term }, vedios => {
      this.setState({
        videosList: vedios,
        currentVedio: {
          id: vedios[0].id.videoId,
          title: vedios[0].snippet.title,
          url: vedios[0].snippet.thumbnails.default.url,
          description: vedios[0].snippet.description
        }
      });
    });
  }

  setCurrentVedio(vedio) {
    
  

   

    this.setState({
      videosList: this.state.videosList,
      currentVedio:vedio
    });
  }

  setVedioList() {
    if (this.state.videosList.length === 0) {
      let title = "loading...";
      let img_url = "img/loading.gif";
      let description = "";
      return [
        { id: "0", title: title, url: img_url, description: description },
        { id: "1", title: title, url: img_url, description: description },
        { id: "2", title: title, url: img_url, description: description },
        { id: "3", title: title, url: img_url, description: description },
        { id: "4", title: title, url: img_url, description: description }
      ];
    } else {
      let list = this.state.videosList.map(vedio => {
        return {
          id: vedio.id.videoId,
          title: vedio.snippet.title,
          url: vedio.snippet.thumbnails.default.url,
          description: vedio.snippet.description
        };
      });
      return list;
    }
  }
  render() {
    return (
      <div className="page-container">
        <Particles params={config.params} style={config.style} />
        <div className="app-container">
          <div className="header">
            <SearchBox search={this.search} reference={this.searchInput} />
          </div>
          <div className="left">
            <VideoPlayer
              id={this.state.currentVedio.id}
              title={this.state.currentVedio.title}
            />
            <Description description={this.state.currentVedio.description} />
          </div>
          <div className="right">
            <PlayList
              videosList={this.setVedioList()}
              setCurrentVedio={this.setCurrentVedio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
