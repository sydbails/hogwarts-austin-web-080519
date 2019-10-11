import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Piglist from './Piglist.js'
import Filter from './Filter.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      sort: "all",
      filter: false
    }
  }

  updateSort = (val) => {
    this.setState({sort: val})
  }
  
  updateGreased = () => {
    this.setState({filter: !this.state.filter})
  }

  componentDidUpdate(){
    console.log(this.state.sort)
  }
  
  render() {
    return (
      <div className="App">
          < Nav />
          <Filter updateGreased={this.updateGreased} updateSort = {this.updateSort}/>
          <Piglist hogs = {hogs} sort={this.state.sort} filter = {this.state.filter}/>
      </div>
    )
  }
}

export default App;
