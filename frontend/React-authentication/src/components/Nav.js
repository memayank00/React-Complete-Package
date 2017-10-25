import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {LinkContainer} from 'react-router-bootstrap';
import '../App.css';
import Signup from './user/signup';

class Nav extends Component {
   constructor() {
    super();
    this.state = {
      showSignupDialog:false
    }
  }


  render() {
    const{showSignupDialog}=this.state;
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Chuck Norris World</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Food Jokes</Link>
          </li>
          <li>
           <Link to="/special">Celebrity Jokes</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><button className="btn btn-info log">Log In</button></li>
          <li>
                 <button className="btn btn-info log"  onClick={() => this.signup()}>Sign Up </button>
             
          </li>
        </ul>
        <Signup show={showSignupDialog} close={() => this.hideDialoge()}/>
      </nav>
    );
  }
  signup() {
    this.setState({showSignupDialog:true});
     
    
  }
  hideDialoge() {
    this.setState({showSignupDialog:false});
     
    
  }
    
}

export default Nav;