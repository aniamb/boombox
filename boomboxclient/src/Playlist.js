import React, { Component } from 'react'
//import { Route, Switch, NavLink } from 'react-router-dom'

//import Valence from "./Valence"

//import {keyData} from "./Keyword"
// import Keyword from "./Keyword"
import base from "./base"

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            danceLevel: '',
            energyLevel: '',
            valenceLevel: '',
            tempoLevel: '',
            privacyLevel: '',
            isSubmitted: false,
            allItems: [],
        }
    }
    //componentwillMount
    componentWillMount() {
        this.setState({key: localStorage.getItem('keyData')})
        this.setState({danceLevel: localStorage.getItem('danceData')})
        this.setState({energyLevel: localStorage.getItem('energyData')})
        this.setState({valenceLevel: localStorage.getItem('valenceData')})
        this.setState({tempoLevel: localStorage.getItem('tempoData')})
        this.setState({privacyLevel: localStorage.getItem('privacyData')})

    }
    componentDidMount() {
        //print out values in database
        //need to pass keyword prop to access
        const itemsRef = base.database().ref('users');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              keyword: items[item].keyword,
            });
          }
          this.setState({
            allItems: newState,
          });
        });
    }



    render(){
        if(this.state.key!=null){
        console.log(`localStorage key: ${this.state.key}`)
        }
            console.log(`localStorage dance: ${this.state.danceLevel}`)
        if(this.state.energyLevel!=null){
            console.log(`localStorage energy: ${this.state.energyLevel}`)
        }
        if(this.state.valenceLevel!=null){
            console.log(`localStorage valence: ${this.state.valenceLevel}`)
        }
        if(this.state.tempoLevel!=null){
            console.log(`localStorage tempo: ${this.state.tempoLevel}`)
        }
        if(this.state.privacyLevel!=null){
            console.log(`localStorage priv: ${this.state.privacyLevel}`)
        }


        // console.log(`pls god let this work PLEASE: ${Keyword.keyData}`)
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