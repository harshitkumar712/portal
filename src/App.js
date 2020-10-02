import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import "./app.css";

class App extends Component {
 
  render() {
    return (
      <div className="App">
       <div><Link exact to='/admin'>ADMIN</Link></div>
       <div><Link exact to='/user'>USER</Link></div>
      </div>
    );
  }
}

export default App;
