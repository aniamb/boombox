import React, { Component } from 'react'
import "./Playlist.css"
import { NavLink } from 'react-router-dom'

   
class Playlist extends Component {
    render(){
        const btn = {
            fontSize: "35px",
           
          }
        return(
            <div className="Playlist">
            <div className="outer" id="playlist-create">
                <h2 id="body-header">Bring some positivity to your life
                and check out your new playlist on Spotify! Explore some other positive playlists!
                </h2>
                <li><NavLink to="/explore" className="fas fa-globe-americas iconApp" id="Spotbtn" style={btn}></NavLink></li>

            </div>
            </div>
        )
    }
}

export default Playlist