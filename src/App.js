import React, { Component } from 'react'

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
constructor(){
  super();
  this.state={
    champions:[],
    searchField:''
  }
}

componentDidMount(){
  fetch('https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json')
  .then(response=>response.json())
  .then(champs=>this.setState({champions:champs}))
}

handleChange =(e)=>{
  this.setState({searchField:e.target.value})
}

  render(){
const { champions,searchField } =this.state;
const filtredChampions=champions.filter(champion=>champion.name.toLowerCase().includes(searchField.toLowerCase())
)

    return(
      <div className="App">

        <SearchBox 
        placeholder="Search Champion"
        handleChange={this.handleChange}
        />
          <CardList champions={filtredChampions} /> 
    </div>
    )
  }
}

export default App;
