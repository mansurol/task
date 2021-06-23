import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home'
const App = () => {
  return (
    <div>
      <Router>
      <Nav/>
       <Switch>
          <Route path="/">
              <Home/>
          </Route>
         
       </Switch>

      </Router>
    </div>
  );
};

export default App;
