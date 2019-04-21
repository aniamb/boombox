import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import  Slider  from 'react-rangeslider'
// import base from "./base"
import 'react-rangeslider/lib/index.css'

// import Energy from "./Energy"
// import Explore from "./Explore"
// import Data from "./data"

class Dance extends Component {
    constructor(props){
        super(props);
        this.state = {
            danceLevel: 0,
            isSubmitted: false,
        }
    }
    handleChange = (value)  => {
        this.setState({danceLevel: value })
        
    }
    handleSubmit = (ev) => {
       ev.preventDefault()
      // console.log(`Submitted Dance Level: ${this.state.danceLevel}`)
       this.setState({isSubmitted: true})
    //    const usersRef = base.database().ref('users');
    //     usersRef.child(localStorage.getItem('keyData')).set({
    //         danceLevel: this.state.danceLevel,
    //     })
       localStorage.setItem("danceData", this.state.danceLevel/10)
      // this.props.history.push(`/dance`)
    }

    render(){
        // console.log(`${this.props.location.keyword}`)
       // console.log(`Keyword from "Keyword": ${this.props.location.keyword}`)
       const danceLabels = {
           0: 'Nah don\'t feel like dancing',
           10: 'Get me on my feet!'
       } 
       const sliderStyle = {
           width: '50%',
           margin: 'auto',
       }
       return(
            <div className="Dance">
                <h3>Type in a number from 1 to 10 depending
                    on how "danceable" you want the songs
                </h3>
                {/* <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type = "text"
                                value={this.state.danceLevel}
                                onChange={this.handleChange.bind(this)}
                            />
                        </div>
                    <div>
                        <button type="submit">Next </button>
                    </div>
                   </form> */}

                <div className="slider orientation-reversed custom-labels" >
                    <div className = "slider-group" style={sliderStyle}>
                        <div className = "slider-horizontal">
                            <Slider
                                min = {0}
                                max = {10}
                                value = {this.state.danceLevel}
                                labels = {danceLabels}
                                orientation = 'horizontal'
                                onChange = {this.handleChange}
                            />
                            <div className = 'value'>{this.state.danceLevel}</div>
                        </div>
                     </div>
                </div>
                <form  onSubmit= {this.handleSubmit} >
                <button type="submit">Next </button>
                </form>
                    {/* <li><NavLink to="/energy">move to energy</NavLink></li>
                    <Route path="/energy" component={Energy}/> */}
                    {/* <Data danceLevel={this.state.danceLevel} /> */}
                    {this.state.isSubmitted && <Redirect to={{
                    pathname: '/energy',
                    danceLevel: this.state.danceLevel,
                }}/>}
            </div>
        )
    }
}

export default Dance
