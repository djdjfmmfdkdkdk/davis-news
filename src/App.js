import React, { useEffect, useState } from 'react';
import Navbar  from './Navbar';
import { Page } from './Page';
import { Search } from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';  


const theme = createTheme({
  palette: {
    primary: { main: '#000000' }
  }
});

function App() {
  const [country, setCountry] = useState('US');
  
  return (
    <>
      <ThemeProvider theme={theme}>
      <Navbar color='primary' country={country} onCountryChange={setCountry} />
      {/* <Router> */}
      
        {/* <Switch> */}
        {/* <Route path="/" exact component={Page} /> 
        <Route path="/search" component={Search} /> 
        <Route path="/:id" render={({ match }) => (
          <Page key={match.params.id} />
        )}
        />  */}


          {/* <Route exact path="/">
            <Page country={country} />
          </Route>
          <Route path="/search">
            <Search country={country} />
          </Route>
          <Route path="/:id">
            <Page country={country} />
          </Route>

        </Switch> */}
      </ThemeProvider>
      {/* </Router> */}
    </>
  );
}

export default App;
