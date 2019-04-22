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
            privacy: null,
            isSubmitted: false,
            selectedValuePlaceholder: "Select",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (privacy)  => {
        //console.log(`test123 ${privacy.value}`)
        this.setState({selectedValuePlaceholder: privacy.label})
        this.setState({
            privacy: privacy.value}, function() {
                /*add entire object to database*/
                localStorage.setItem("privacyData", this.state.privacy);
                const usersRef = base.database().ref('users');
                usersRef.child(localStorage.getItem('keyData')).set({
                    privacy: localStorage.getItem('privacyData'),
                    keyword: localStorage.getItem('keyData'),
                    danceLevel: localStorage.getItem('danceData'),
                    energyLevel: localStorage.getItem('energyData'),
                    valenceLevel: localStorage.getItem('valenceData'),
                    tempoLevel: localStorage.getItem('tempoData'),
                    username: '',
        })
            }.bind(this));
        //localStorage.setItem("privacyData", this.state.privacy)

    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        //console.log(`Submitted Privacy: ${this.state.privacy}`)
        this.setState({isSubmitted: true})
     }
    render(){
        const dropStyle = {
            width: '50%',
            margin: 'auto'
        }
        const {privacy} = this.state;

        return(
            <div className="Save">
                 <h3> Do you want this to be a Public or Private playlist</h3>
                <div className="dropMenu" style = {dropStyle}>
                <Select 
                    options={options}
                    value = {privacy}
                    placeholder = {this.state.selectedValuePlaceholder}
                    onChange={this.handleChange}
               />
                </div>
                
                <form  onSubmit= {this.handleSubmit} >
                {/* <button type="submit"><a href='https://boom-box-server.herokuapp.com'>Next</a></button> */}
                <button type="submit"><a href='http://localhost:8888'>Next</a></button>

                </form>
                 
                     {this.state.isSubmitted && <Redirect to={{
                    pathname: '/playlist',
                    privacy: this.state.privacy,
                     }}/>} 
            </div>
        )
    }
}

export default Save
