import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './products'
class App extends Component {
  constructor(){
    super();
    this.state = {
      isPressed: false,
      contactIsPressed: false,
      homePressed:false
    }
  }
  handleClickAbout(){
    this.setState({
      isPressed:true,
      contactIsPressed:false
    })
  }
  handleClickContact(){
    this.setState({
      contactIsPressed: true,
      isPressed: false,
    })
  }
  handleClickHome(){
    this.setState({
      homePressed:true,
      isPressed: false,
      contactIsPressed: false,
    })
  }
  render() {
    var home = {};
    var about = {};
    var contact = {};
    if(this.state.isPressed){
      about.background = 'blue';
      this.state.contactIsPressed = false;
      home.background = 'white';
    }else{
      home.background = 'blue';
    }
    if(this.state.contactIsPressed){
      contact.background = 'blue';
      home.background = 'white' ;
    }else{
      home.background = 'blue';
    }
    
    return (
      <div className="App">
        <h2> My Navigation Menu </h2>
        <div className = "btns">
          <button className = "btn" style = {home} onClick = {this.handleClickHome.bind(this)} >
              Home 
          </button>
          <button style = {about} onClick = {this.handleClickAbout.bind(this)}  className = "btn"> About </button>
          <button style = {contact} onClick = {this.handleClickContact.bind(this)} className = "btn"> Contact </button>
        </div>
        <Products />
      </div>
    );
  }
}

export default App;
