import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Select from 'react-select'
import { Redirect } from 'react-router'

import Playlist from "./Playlist"
// import Explore from "./Explore"

const options = [
    {label: "public"},
    {label: "private"},
    ];

class Save extends Component {
    constructor(props){
        super(props);
        this.state = {
            privacy: '',
            isSubmitted: false,
        }
    }
    handleChange = (ev)  => {
        this.setState({privacy: ev.target.value})
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(`Submitted Privacy: ${this.state.privacy}`)
        this.setState({isSubmitted: true})
       // this.props.history.push(`/dance`)
     }
    render(){
        return(
            <div className="Save">
                {/* BoomBox Save Page
                <Select options={options}
                    value = {this.state.privacy}
                    onChange={this.handleChange.bind(this)}
               />
                 <div>
                        <button type="submit" onSubmit={this.handleSubmit}>Create! </button>
                    </div> */}
                 <h3>Choose what privacy setting you want your playlist: public or private?
                </h3>
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                                type = "text"
                                value={this.state.privacy}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                    <div>
                        <button type="submit">Next </button>
                    </div>
                   </form>




                    {/* <li><NavLink to="/playlist">move to playlist</NavLink></li>
                    <Route path="/playlist" component={Playlist}/> */}
                    {this.state.isSubmitted && <Redirect to={{
                    pathname: '/playlist',
                    privacy: this.state.privacy,
                }}/>}
            </div>
        )
    }
}

export default Save