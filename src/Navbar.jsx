import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const pages = ['Business', 'health', 'science', 'entertainment', 'sports', 'technology'];

function Navbar( {country, onCountryChange}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  // console.log(country + 'hi');

  const handleChange = (event) => {
    onCountryChange(event.target.value);
  };



  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="dense" sx={{ minHeight: 90 }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                key={'Home'}
                component={Link}
                to={'/'}         
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',
                  borderBottom: '4px solid blue',
                 }}
              >
                Home
              </Button>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase()}`}         
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0}}>
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              component={Link}
              to={'/search'}
              onClick={() => console.log('Search clicked')}>
                <SearchIcon />
            </IconButton>
          </Box>

          <FormControl sx={{ width: 'auto', minWidth: 100, ml:2 }}>
          {/* <InputLabel id="demo-simple-select-label">Country</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Country"
            onChange={handleChange}
            sx={{
              // Background color and border of the input box
              bgcolor: 'white',
              // '& .MuiOutlinedInput-notchedOutline': {
              //   borderColor: '#ccc',
              // },
              // // Optional: darken on focus
              // '&:hover .MuiOutlinedInput-notchedOutline': {
              //   borderColor: '#999',
              // },
              // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              //   borderColor: 'primary.main',
              // },
            }}
          >
            <MenuItem value="US">US</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="FR">FR</MenuItem>
            <MenuItem value="AU">AU</MenuItem>
            <MenuItem value="NZ">NZ</MenuItem>
            <MenuItem value="CA">CA</MenuItem>
          </Select>
        </FormControl>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
