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
        this.setState({privacyLevel: localStorage.getItem('privacyData')})

    }
    componentDidMount() {
        //print out values in database
        //need to pass keyword prop to access
        // const itemsRef = base.database().ref('users');
        // itemsRef.once('value', (snapshot) => {
        //   let items = snapshot.val();
        //   let newState = [];
        //   for (let item in items) {
        //     newState.push({
        //     //   privacy: items[item].privacy,
        //       keyword: items[item].keyword,
        //     //   danceLevel: items[item].danceLevel,
        //     //   energyLevel: items[item].energyLevel,
        //     //   valenceLevel: items[item].valenceLevel,
        //     //   tempoLevel: items[item].tempoLevel,
        //     });
        //   }
        //   this.setState({
        //     allItems: newState,
        //   });
        // });
        fetch('/playlist')
        .then((response) => response.text())
        .then((responseJson) =>{
            this.setState({
                username: responseJson.username
            })
        })
        const itemsRef = base.database().ref("users/" + localStorage.getItem('keyData'));
        // itemsRef.once("value").then(function(snapshot) {
        itemsRef.once('value', (snapshot) => {
            let newState = [];
            const privacy = snapshot.child("privacy").val();
            const keyword = snapshot.child("keyword").val();
            const danceLevel = snapshot.child("danceLevel").val();
            const energyLevel = snapshot.child("energyLevel").val();
            const valenceLevel = snapshot.child("valenceLevel").val();
            const tempoLevel = snapshot.child("tempoLevel").val();
            newState.push(keyword,privacy,danceLevel,energyLevel,valenceLevel,tempoLevel)
                
            this.setState({
                allItems: newState
            });
        })
    }

    render(){
        // const dataMap = this.state.allItems.map(function(item){
        //     return <li> {item} </li>;
        //   });
        console.log(`if this works imma kill someone ${this.state.username}`)
        return(
            <div className="Playlist">
                BoomBox Playlist Page for keyword {localStorage.getItem('keyData')}
                <ul>
                      {this.state.allItems.map(item =>(
                        <li>{item}</li>
                    ))}  
                   
                    {/* {dataMap} */}
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