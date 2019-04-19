import React, { Component } from 'react'
//import { Route, Switch, NavLink } from 'react-router-dom'

//import Valence from "./Valence"

import {data} from "./data"
import base from "./base"

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.keyword,
            isSubmitted: false,
            allItems: [],
        }
    }

    componentDidMount() {
        //print out values in database
        const itemsRef = base.database().ref('keyword');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              keyword: items[item].keyword,
            });
            console.log(`yeeeeee ${items[item].keyword}`)
          }
          this.setState({
            allItems: newState,
          });
        });
    }



    render(){
        console.log(`printed from playlsit: ${this.state.key}`)
        // console.log(`god pls work: ${data.danceLevel}`)
        return(
            <div className="Playlist">
                BoomBox Playlist Page
                <ul>
                    {this.state.allItems.map(item =>(
                        <li>{item.keyword}</li>
                    ))}
                </ul>
                    {/* <li><NavLink to="/valence">move to valence</NavLink></li>
                <Switch>
                    <Route path="/valence" component={Valence}/>
                </Switch> */}
            </div>
        )
    }
}

export default Playlist