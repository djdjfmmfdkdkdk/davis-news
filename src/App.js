import { useState } from 'react';
import Navbar  from './Navbar';
import { About } from './About';
import { Page } from './Page';
import { Search } from './Search';
import {
  Switch,
  Route,
  useLocation,
  Redirect
} from "react-router-dom";
import Box from '@mui/material/Box';
import Footer from './Footer';


// const theme = createTheme({
//   palette: {
//     mode: 'light'
//   }
// });

// originl api key: 5dbd5c89f7b04eb9a46a3014fdaf6738

function App() {
  const [country, setCountry] = useState('US');
  const routeLocation = useLocation();
  
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100%',
          overflowX: 'hidden'
        }}
      >
        <Navbar color='primary' country={country} onCountryChange={setCountry} />
        {/* <Router> */}
        <Box sx={{ flex: '1' }}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" key='home'>
              <Page country={country} />
            </Route>
            <Route path="/search" key='search'>
              <Search country={country} />
            </Route>
            <Route path='/about' key='about'>
              <About />
            </Route>
            <Route path="/:id" key={routeLocation.pathname}>
              <Page country={country} />
            </Route>
            

          </Switch>
        </Box>
        <Footer />
      </Box>
      {/* </ThemeProvider> */}
      {/* </Router> */}
    </>
  );
}

export default App;


      