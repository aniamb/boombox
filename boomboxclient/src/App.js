import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'

import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';


import Home from './Home'
import Explore from './Explore'
import Keyword from './Keyword'
import Dance from './Dance'
import Energy from './Energy'
import Valence from "./Valence"
import Tempo from "./Tempo"
import Save from "./Save"
import Playlist from "./Playlist"

const spotifyApi = new SpotifyWebApi();
var loggedIn = 0;



class App extends Component {
    constructor(){
    super();
      const params = this.getHashParams();
      const token = params.access_token;
      console.log(params);
      // if (token) {
      //   spotifyApi.setAccessToken(token);
      // }
      // this.state = {
      //   loggedIn: token ? true : false,
      //   nowPlaying: { name: 'Not Checked'}
      // }
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

  // getNowPlaying(){
  // spotifyApi.getMyCurrentPlaybackState()
  //   .then((response) => {
  //     this.setState({
  //       nowPlaying: {
  //           name: response.item.name,
  //         }
  //     });
  //   })
  // }



  render() {

    return (
      <div className="App">
        <div className = "links">
          <ul className = "navLinks">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/explore">Explore</NavLink></li>

              <a href='http://localhost:8888'> Login to Spotify </a>



          </ul>
        </div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/explore" component={Explore}/>
          <Route path="/keyword" component={Keyword}/>
          <Route path="/dance" component={Dance}/>
          <Route path="/energy" component={Energy}/>
          <Route path="/energy" component={Energy}/>
          <Route path="/valence" component={Valence}/>
          <Route path="/tempo" component={Tempo}/>
          <Route path="/save" component={Save}/>
          <Route path="/playlist" component={Playlist}/>
          <Route render= {() =>
            <Home />
           }/>
        </Switch>
      </div>
    )
  }
}

export default App;
