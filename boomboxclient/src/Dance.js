import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import  Slider  from 'react-rangeslider'
// import base from "./base"
import 'react-rangeslider/lib/index.css'
import './Dance.css'
import base from "./base"

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
    componentDidMount(){
        /* get last added keyword */ 
        // const usersRef = base.database().ref('keyword');
        // usersRef.orderByChild('timestamp').limitToLast(1).on('child_added',function(snapshot) {
        //     console.log('new record', snapshot.child("keyword").val());
        //   });
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
           width: '70%',
           marginTop:'45px',
           marginLeft: 'auto',
           marginRight: 'auto'
       }
        const btn = {
           marginTop: '60px',
           fontSize: '35px',
           color: 'rgb(30, 182, 65)',
           border: 'none',
           backgroundColor: '#F2F2F2'
       }
       return(
            <div className="Dance">
                <div className="outer">
                <h3>How <b>"danceable"</b> do you want the songs?
                </h3>
              

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
                <button type="submit"  style={btn}><i className="fas fa-forward"></i></button>
                </form>
                    {/* <li><NavLink to="/energy">move to energy</NavLink></li>
                    <Route path="/energy" component={Energy}/> */}
                    {/* <Data danceLevel={this.state.danceLevel} /> */}
                    {this.state.isSubmitted && <Redirect to={{
                    pathname: '/energy',
                    danceLevel: this.state.danceLevel,
                }}/>}
                </div>
            </div>
        )
    }
}

export default Dance
