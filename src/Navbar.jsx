import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ApiIcon from "@mui/icons-material/Api";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import SunnyIcon from '@mui/icons-material/Sunny';

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

function Navbar({ country, onCountryChange }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const routeLocation = useLocation();

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
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters variant="dense" sx={{ minHeight: 90 }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            display="flex"
            sx={{
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <ApiIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
              aria-label="search"
              color="inherit"
              component={Link}
              to={"/search"}
            >
              <SunnyIcon />
            </IconButton>
          
          <Box>
            <FormControl sx={{ width: "auto", minWidth: 100, ml: 2 }}>
              <Select
                id="demo-simple-select"
                value={country}
                onChange={handleChange}
                sx={{
                  // Background color and border of the input box
                  bgcolor: "white",
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
