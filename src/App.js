import React, { Component } from "react";
import SiteBar from "./home/Navbar";
import Auth from './auth/Auth';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionToken: ''  //1
    }
  }

componentWillMount() {
    const token = localStorage.getItem('token'); //4
    if (token && !this.state.sessionToken) {   //5 
      this.setState({ sessionToken: token });
    }
}

setSessionState = (token) => {
    localStorage.setItem('token', token); //3
    this.setState({ sessionToken: token });
}

//render method is down here

  render() {
    return (
      <Router>
      <div>
          <SiteBar />
          <Auth />
      </div>
     </Router>
    );
  }
}

export default App;
