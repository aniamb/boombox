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
import base from "./base"
import './App.css'

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
  //   componentWillMount (){
  //     localStorage.clear();
  // }
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
    const background = {
      backgroundImage: 'url(' + require('/Users/netrapradhan/Documents/GitHub/boombox/boomboxclient/src/imgs/background5.jpg') + ')',
      // backgroundImage: 'url('+{bkgdn}+')',

      backgroundSize: 'cover',
      
    }
    const btn = {
      fontSize: "50px",
      marginRight: "10px"
     
    }
    const margHome = {
      marginRight: "40%"
    }
    return (
      <div className="App">

        <div className = "links header">
        <h1>boombox</h1> 
          <ul className = "navLinks" style = {btn}>
           <li> <NavLink to="/home" className="fas fa-home iconApp" style={margHome}></NavLink></li>
           
           <li><NavLink to="/explore" className="fas fa-globe-americas iconApp"></NavLink></li>
            {/* <a href='http://localhost:8888'> Login to Spotify </a> */}
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
