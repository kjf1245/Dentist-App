import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'

class AppRouter extends Component{
  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
