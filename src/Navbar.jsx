import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ApiIcon from "@mui/icons-material/Api";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import SunnyIcon from '@mui/icons-material/Sunny';
import { createTheme, ThemeProvider, CssBaseline, useTheme } from '@mui/material';  
import { ColorModeContext } from './ThemeContextProvider';


const pages = [
  "home",
  "business",
  "health",
  "science",
  "entertainment",
  "sports",
  "technology",
];

const colorMap = {
  home: "blue",
  business: "green",
  health: "red",
  science: "purple",
  entertainment: "yellow",
  sports: "brown",
  technology: "cyan",
};

const countryList = [
    { code: "US", label: "🇺🇸 US" },
    { code: "UK", label: "🇬🇧 UK" },
    { code: "FR", label: "🇫🇷 FR" },
    { code: "AU", label: "🇦🇺 AU" },
    { code: "NZ", label: "🇳🇿 NZ" },
    { code: "CA", label: "🇨🇦 CA" },
  ];

function Navbar({ country, onCountryChange }) {

  const routeLocation = useLocation();

  const theme = useTheme();

  const { toggleColorMode } = useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [countryMenuAnchorEl, setCountryMenuAnchorEl] = useState(null);
  const countryMenuOpen = Boolean(countryMenuAnchorEl);

  const handleCountryMenuClick = (event) => {
    setCountryMenuAnchorEl(event.currentTarget);
  };

  const handleCountryMenuClose = () => {
    setCountryMenuAnchorEl(null);
  };

  const handleCountrySelect = (code) => {
    onCountryChange(code);
    handleCountryMenuClose();
  };


  // console.log(country + 'hi');

  return (
    <AppBar position="relative" sx={{
    bgcolor: theme.palette.mode === 'light'
      ? 'black'
      : '#121212',
  }} >
    {/* <Box
      sx={{
        // width: '100%',
        // bgcolor: theme.palette.mode === 'light' ? 'black' : '#121212',
        display: 'flex',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    width: '100%',
    // optional: hide scrollbar on some browsers if you want:
    '&::-webkit-scrollbar': { display: 'none' },
    '-ms-overflow-style': 'none', // IE and Edge
    'scrollbar-width': 'none', // Firefox
      }}
    > */}
      <Toolbar disableGutters variant="dense" sx={{ minHeight: 90 }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
          <Box
            component={Link}
            to="/home"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              mr: 2,
              "&:hover": { opacity: 0.8 },
              display: 'flex', [theme.breakpoints.down(1030)]: { display: 'none' }
            }}
          >
            <ApiIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
              }}
            >
              DCN
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'none', [theme.breakpoints.down(1030)]: { display: 'flex' }}}>
            <IconButton
              size="large"
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.toUpperCase()}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component={Link}
            to="/home"
            // display="flex"
            sx={{
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              flexGrow: 1,
              display: 'none', [theme.breakpoints.down(1030)]: { display: 'flex' }
            }}
          >
            <ApiIcon sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DCN
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', [theme.breakpoints.down(1030)]: { display: 'none' }} }>
            {pages.map((page) => {
              const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
              const isActive = routeLocation.pathname === path;
              return (
                <Button
                  key={page}
                  component={Link}
                  to={path}
                  sx={{
                    color: "inherit",
                    borderRadius: 0,
                    mx: 1,
                    borderBottom: isActive
                      ? `4px solid ${colorMap[page]}`
                      : "none",
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              component={Link}
              to={"/search"}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <IconButton
              size="large"
              aria-label="toggleMode"
              color="inherit"
              onClick={toggleColorMode}
            >
              {theme.palette.mode === 'light' ? <SunnyIcon /> : <ModeNightIcon />}
            </IconButton>
          
          {/* <Box>
            <FormControl sx={{ width: "auto", minWidth: 70, ml: 2, alignItems:"center" }}>
              <Select
                id="demo-simple-select"
                value={country}
                onChange={handleChange}
                sx={{
                  // Background color and border of the input box
                  // bgcolor: "palette.divider",
                  color: 'text.secondary',
                  bgcolor: theme.palette.mode === 'light' ? 'background.paper' : 'background.default',
                }}
              >
                <MenuItem value="US">🇬🇧</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="FR">FR</MenuItem>
                <MenuItem value="AU">AU</MenuItem>
                <MenuItem value="NZ">NZ</MenuItem>
                <MenuItem value="CA">CA</MenuItem>
              </Select>
            </FormControl>
          </Box> */}


          <Box pl={2}>
          <div
            id="country-button"
            aria-controls={countryMenuOpen ? "country-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={countryMenuOpen ? "true" : undefined}
            onClick={handleCountryMenuClick}
            variant="outlined"
            color="inherit"
            sx={{ ml: 2, textTransform: "none", minWidth: 90 }}
          >
            🌍
          </div>
          <Menu
            id="country-menu"
            anchorEl={countryMenuAnchorEl}
            open={countryMenuOpen}
            onClose={handleCountryMenuClose}
            disableScrollLock={true}
            // slotProps={{
            //   list: {
            //     "aria-labelledby": "country-button",
            //   }
            // }}
          >
            {countryList.map(({ code, label }) => (
              <MenuItem
                key={code}
                selected={country === code}
                onClick={() => handleCountrySelect(code)}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>




        </Container>
      </Toolbar>
      {/* </Box> */}
    </AppBar>
  );
}
export default Navbar;
