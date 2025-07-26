import { Box, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import { useLocation, Link } from "react-router-dom";

function Footer() {
    return (
    //   <Box sx={{ textAlign: 'center', mt: 2, mb: 4, width: '100%', bgcolor: 'gray', colour: 'red'}}>
    //     <Button variant="contained">
    //       Load More
    //     </Button>
    //   </Box>

      <Box
      sx={{
        width: '100%',
        bgcolor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        py: 3,
        mt: 4,
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        Follow us
      </Typography>
      <Box>
        <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
        >
            <FacebookIcon />
        </IconButton>

        <IconButton
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
        >
            <YouTubeIcon />
        </IconButton>

        <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
        >
            <TwitterIcon />
        </IconButton>

        <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
        >
            <InstagramIcon />
        </IconButton>

        <IconButton
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
        >
            <WhatsAppIcon />
        </IconButton>

        <IconButton
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
        >
            <LinkedInIcon />
        </IconButton>
        <IconButton
            to='/about'
            component={Link}
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
        >
            <InfoIcon/>
        </IconButton>
      </Box>
      <Typography variant="caption" sx={{ mt: 2 }}>
        © 2025 DCN
      </Typography>
    </Box>

    );

};

export default Footer;



// export const Page = ({ country, onCountryChange }) => {
  


//   return (
//   <>
  
    
//   </>);
// };