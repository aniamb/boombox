import React, { Component } from 'react'
//import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';

//import Valence from "./Valence"
const spotifyApi = new SpotifyWebApi();

class Playlist extends Component {
  constructor(){
  super();
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(params);
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked'}
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
  spotifyApi.getMyCurrentPlaybackState()
    .then((response) => {
      this.setState({
        nowPlaying: {
            name: response.item.name,
          }
      });
    })
  }


    render(){
        return(
          <div className="Playlist">
            <div>
              Now Playing: { this.state.nowPlaying.name }
            </div>
            { this.state.loggedIn &&
              <button onClick={() => this.getNowPlaying()}>
                Check Now Playing
              </button>
            }
          </div>
        )
    }
}

export default Playlist
