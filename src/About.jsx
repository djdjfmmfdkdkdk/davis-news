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
import { useLocation, Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ApiIcon from "@mui/icons-material/Api";
import { createTheme, ThemeProvider, CssBaseline, useTheme } from '@mui/material';  
import { ColorModeContext } from './ThemeContextProvider';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export const About = () => {

    const [value, setValue] = useState('');




    return (

        <>
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display:"flex", width:'100%'}}>
                <Box flex={1}>
                    <h1>
                    THE OLD CAR BARN  
                    </h1>
                    <Typography sx={{ fontSize:'18px', lineHeight: '2' }}>
                    BOB THE REPORTER<br />
                    The Old Car Barn<br />
                    College Farm Business Park<br />
                    Bourne End<br />
                    Cranfield<br />
                    Bedfordshire<br />
                    TW8 9EW</Typography>
                </Box>
                <div style={{ width: '100%', height: '450px', flex: '1', marginLeft: '16px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79500.33859485367!2d-0.46973895664062504!3d51.487791400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760da6d86a7cbd%3A0x89f5cc64588e9c32!2sSky%20Studios!5e0!3m2!1sen!2suk!4v1753691154343!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Embed"
                ></iframe>
                </div>
            </Box>

            <Box sx={{ display:"flex", my:4, width:'100%' }}>
                <Box flex={1}>
                    <h2>
                        Talk to Bob
                    </h2>
                        <Typography sx={{ fontSize:'18px', lineHeight: '2', my: 2}}>
                        Bob Goodwin<br />
                        bob@bobthereporter.com<br />
                        </Typography>
                        <Typography sx={{ fontSize:'18px', lineHeight: '2', my: 2 }}>
                        01917 721 831<br />
                        07825 873 456<br />
                        </Typography>
                        <Typography sx={{ fontSize:'18px', lineHeight: '2', mt: 2 }}>
                        Working hours<br />
                        Monday to Friday 0800-1730<br />
                        </Typography>
                </Box>
                <Box maxWidth="sm" sx={{  ml: 2, flex: '1' }}>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                        Information box
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                        />
                        </Box>

                        <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        />

                        <TextField
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        />

                        <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={4}
                        />

                        <Button variant="contained" color="inherit">
                        Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
        </>
    )
}