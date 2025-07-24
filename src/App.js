import React, { useEffect, useState } from 'react';
import Navbar  from './Navbar';
import { Page } from './Page';
import { Search } from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';  
import Box from '@mui/material/Box';
import Footer from './Footer';


const theme = createTheme({
  palette: {
    primary: { main: '#000000ff' }
  }
});

// originl api key: 5dbd5c89f7b04eb9a46a3014fdaf6738

function App() {
  const [country, setCountry] = useState('US');
  const routeLocation = useLocation();
  
  return (
    <>
      <ThemeProvider theme={theme}>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Navbar color='primary' country={country} onCountryChange={setCountry} />
        {/* <Router> */}
        <Box sx={{ flex: '1' }}>
          <Switch>
            <Route exact path="/home" key='home'>
              <Page country={country} />
            </Route>
            <Route path="/search" key='search'>
              <Search country={country} />
            </Route>
            <Route path="/:id" key={routeLocation.pathname}>
              <Page country={country} />
            </Route>

          </Switch>
        </Box>
        <Footer />
      </Box>
      </ThemeProvider>
      {/* </Router> */}
    </>
  );
}

export default App;


        {/* <Route path="/home" exact component={Page} /> 
        <Route path="/search" component={Search} /> 
        <Route path="/:id" render={({ match }) => (
          <Page key={match.params.id} />
        )}
        />  */}