import React, { Component } from 'react'
//import { Route, Switch, NavLink } from 'react-router-dom'

//import Valence from "./Valence"

//import {keyData} from "./Keyword"
// import Keyword from "./Keyword"

import base from "./base"
import "./Playlist.css"

   
class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            danceLevel: '',
            energyLevel: '',
            valenceLevel: '',
            tempoLevel: '',
            playlistName: '',
            // privacyLevel: '',
            isSubmitted: false,
            allItems: [],
            username: ''
        }
    }
    //componentwillMount
    componentWillMount() {
        this.setState({key: localStorage.getItem('keyData')})
        this.setState({danceLevel: localStorage.getItem('danceData')})
        this.setState({energyLevel: localStorage.getItem('energyData')})
        this.setState({valenceLevel: localStorage.getItem('valenceData')})
        this.setState({tempoLevel: localStorage.getItem('tempoData')})
        this.setState({playlistName: localStorage.getItem('playlistName')})

    }
    componentDidMount() {
        //print out values in database
        //need to pass keyword prop to access
        const itemsRef = base.database().ref("users/" + localStorage.getItem('playlistName'));
        // itemsRef.once("value").then(function(snapshot) {
        itemsRef.once('value', (snapshot) => {
            let newState = [];
            // const privacy = snapshot.child("privacy").val();
            const playlistName = snapshot.child("aaaplaylistName").val();
            const keyword = snapshot.child("keyword").val();
            const danceLevel = snapshot.child("danceLevel").val();
            const energyLevel = snapshot.child("energyLevel").val();
            const valenceLevel = snapshot.child("valenceLevel").val();
            const tempoLevel = snapshot.child("tempoLevel").val();
            newState.push(playlistName, keyword,danceLevel,energyLevel,valenceLevel,tempoLevel)
                
            this.setState({
                allItems: newState
            });
        })
    }

    render(){
        // const dataMap = this.state.allItems.map(function(item){
        //     return <li> {item} </li>;
        //   });
      
        return(
            <div className="Playlist">
            <div className="outer">
                 <iframe title="Spotify Embed" 
                        src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXcBWIGoYBM5M"
                        width="300" height="380" 
                        frameborder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media"
                        >
                </iframe>
            </div>
            <div className="outer">
                <h2>{localStorage.getItem('playlistName')}</h2>
                <ul>
                      {this.state.allItems.map(item =>(
                        <p>{item}</p>
                    ))}  
                   
                    {/* {dataMap} */}
                </ul>
                    {/* <li><NavLink to="/valence">move to valence</NavLink></li>
                <Switch>
                    <Route path="/valence" component={Valence}/>
                </Switch> */}
            </div>
            </div>
        )
    }
}

export default Playlist