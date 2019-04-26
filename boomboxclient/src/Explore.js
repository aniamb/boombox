import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'

// import Home from "./Home"
import base from "./base"
import { format } from 'url';

import SpotifyPlayer from 'react-spotify-player'
import "./Explore.css"

class Explore extends Component {
    constructor(props){
        super(props);
        this.state = {
            dance: '',
            energy: '',
            keyword: '',
            playlist:'',
            valence:'',
            info: [],
            allInfo: [],
        }
    }
    // componentWillMount (){
    //     localStorage.clear();
    // }

    componentDidMount(){
        let allTemp = [];
            allTemp.push("spotify:user:spotify:playlist:37i9dQZF1DXdPec7aLTmlC", "spotify:user:spotify:playlist:37i9dQZF1DWSqmBTGDYngZ",
            "spotify:user:netra_pradhan:playlist:2udH108x41yKVbNr3zqaQe","spotify:user:aambalavanan:playlist:4RNBeWrhlQB4GPGJz77MRg", "spotify:user:mansigpatel1:playlist:13iZD9XVvE7vhKxfM4xXOA","spotify:user:pujam1231:playlist:4vGJK3jl9WzbpXIhb6vouk",
             "spotify:user:12168032708:playlist:3CR5UzXpFuSyOXRsJkr2Cv","spotify:user:spotify:playlist:37i9dQZF1DWUAZoWydCivZ"  )
            this.setState({
                allInfo: allTemp
            })
        
    }   

    render(){
       const cardStyle = {
           width: "18rem",
           marginLeft: "50%",
           columnCount: "3", 
       }
       const size = {
        width: '100%',
        height: 300,
      };
      const view = 'list'; // or 'coverart'
      const theme = 'black'; // or 'white'

        return(
            <div className="Explore">
                <h2>Check out some amazing curated playlists!</h2>
                    <div className="row">
                     {this.state.allInfo.map(data => 
                            <div className="col-auto mb-3">
                            <div className = "card" style={cardStyle}>
                                    {/* {this.format(data)} */}
                                    <SpotifyPlayer
                                        uri={data}
                                        size={size}
                                        view={view}
                                        theme={theme}
                                    />
                           </div>
                           </div>
                    )}
 
                    </div>

            </div>
        )
    }
}

export default Explore