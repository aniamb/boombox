import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
import Select from 'react-select'
import { Redirect } from 'react-router'
// import { Link } from 'react-router-dom'
// import Playlist from "./Playlist"
// import Explore from "./Explore"
import base from "./base"

const options = [
    {value: 'public', label: "Public"},
    {value: 'private', label: "Private"},
];

class Save extends Component {
    constructor(props){
        super(props);
        this.state = {
           // privacy: null,
            playlistName: '',
            isSubmitted: false,
            //selectedValuePlaceholder: "Select",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (ev)  => {
        //console.log(`test123 ${privacy.value}`)
        //this.setState({selectedValuePlaceholder: privacy.label})
        this.setState({
            playlistName: ev.target.value }, function() {
                /*add entire object to database*/
                localStorage.setItem("playlistName", this.state.playlistName);
                // const usersRef = base.database().ref('users');
                // usersRef.child(localStorage.getItem('playlistName')).set({
                //     playlistName: localStorage.getItem('playlistName'),
                //     keyword: localStorage.getItem('keyData'),
                //     danceLevel: localStorage.getItem('danceData'),
                //     energyLevel: localStorage.getItem('energyData'),
                //     valenceLevel: localStorage.getItem('valenceData'),
                //     tempoLevel: localStorage.getItem('tempoData'),
        // })
            }.bind(this));
        //localStorage.setItem("privacyData", this.state.privacy)

    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        //console.log(`Submitted Privacy: ${this.state.privacy}`)
        this.setState({isSubmitted: true})
        const usersRef = base.database().ref('users');
        usersRef.child(localStorage.getItem('playlistName')).set({
            playlistName: localStorage.getItem('playlistName'),
            keyword: localStorage.getItem('keyData'),
            danceLevel: localStorage.getItem('danceData'),
            energyLevel: localStorage.getItem('energyData'),
            valenceLevel: localStorage.getItem('valenceData'),
            tempoLevel: localStorage.getItem('tempoData'),
        })
     }
    render(){
        const dropStyle = {
            width: '50%',
            margin: 'auto'
        }
        //const {privacy} = this.state;

        return(
            <div className="Save">
                 <h3> Whatcha wanna call this playlist?</h3>
                {/* <div className="dropMenu" style = {dropStyle}>
                <Select 
                    options={options}
                    value = {privacy}
                    placeholder = {this.state.selectedValuePlaceholder}
                    onChange={this.handleChange}
               />
                </div> */}
                
                <form  onSubmit= {this.handleSubmit} >
                    <div>
                         <input 
                            type = "text"
                            value={this.state.playlistName}
                            onChange={this.handleChange.bind(this)}
                            autoFocus
                        />
                    </div>
                {/* <button type="submit"><a href='https://boom-box-server.herokuapp.com'>Next</a></button> */}
                <div>
                    <button type="submit">Next</button>
                </div>
                </form>
                 
                     {this.state.isSubmitted && <Redirect to={{
                    pathname: '/playlist',
                     }}/>} 
            </div>
        )
    }
}

export default Save
