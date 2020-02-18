import React, { Component } from 'react'
import './App.css';

class App extends Component{
constructor(){
  super();
  this.state={
    champions:[]
  }
}

componentDidMount(){
  fetch('https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json')
  .then(response=>response.json())
  .then(champs=>this.setState({champions:champs}))
}

  render(){
    return(
      <div className="App">
     {
       this.state.champions.map(monster=>
      <div key={monster.id}>
<h1>{monster.name}</h1>
<img src={monster.icon} alt="champIcon"></img>
<br></br>
<code>{monster.description}</code>
<br></br>
<br></br>
<br></br>
</div>

      )
     }










    </div>
    )
  }
}

export default App;
