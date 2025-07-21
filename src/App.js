import React from 'react';
import Navbar from './Navbar';
import { Page } from './Page';
import { Search } from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <div>hi</div>
      <Navbar />
      {/* <Router> */}
      
        <Switch>
        <Route path="/" exact component={Page} /> 
        <Route path="/search" component={Search} /> 
        <Route path="/:id" render={({ match }) => (
          <Page key={match.params.id} />
        )}
        /> 

        </Switch>
      {/* </Router> */}
    </>
  );
}

export default App;
