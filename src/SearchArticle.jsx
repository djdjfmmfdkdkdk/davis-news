import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function SearchArticle({ article }) {
    const PLACEHOLDER =
    "https://port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png";

    const { urlToImage, title, description, publishedAt, url } = article;
    const imgSrc = urlToImage || PLACEHOLDER;
    const noDescription = description || "No description available.";
    const theme = useTheme();
    const dateOnly = publishedAt.split('T')[0];

  return (

    // <Card sx={{ maxWidth: 345, height: 380  }}>
    //   <CardMedia
    //     component="img"
    //     height="140"
    //     image={imgSrc}
    //   />
    //   <CardContent>
    //     <Typography sx={{ 
    //       fontSize: 20,
    //       display: '-webkit-box',
    //       WebkitLineClamp: 2,
    //       WebkitBoxOrient: 'vertical',
    //       overflow: 'hidden',
    //       textOverflow: 'ellipsis',
    //     }} gutterBottom variant="h5" component="div">
    //       {title}
    //     </Typography>
    //     <Typography variant="body2" 
    //       sx={{
    //         color: 'text.secondary',
    //         display: '-webkit-box',
    //         WebkitLineClamp: 3, // you can set this to 2 or 3 lines
    //         WebkitBoxOrient: 'vertical',
    //         overflow: 'hidden',
    //         textOverflow: 'ellipsis',
    //         minHeight: '4rem'
    //       }}>
    //       {noDescription}
    //     </Typography>
    //   </CardContent>
    //   <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    //     <Typography sx={{ opacity: 0.9, fontSize: 14, mb: 2 }}>
    //       {publishedAt.split('T')[0]}
    //     </Typography>
    //     <Button
    //         variant="contained"
    //         href={url}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         sx={{ ml: "auto" }} 
    //       >
    //         Read More
    //       </Button>
    //   </CardActions>
    // </Card>



    // <Card sx={{ display: 'flex' }}>
    //   <CardMedia
    //     component="img"
    //     sx={{ width: 151 }}
    //     image={imgSrc}
    //   />
    //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //     <CardContent sx={{ flex: '1 0 auto' }}>
    //       <Typography component="div" variant="h5">
    //         {title}
    //       </Typography>
    //       <Typography
    //         variant="subtitle1"
    //         component="div"
    //         sx={{ color: 'text.secondary' }}
    //       >
    //         {description}
    //       </Typography>
    //     </CardContent>
    //   <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    //     <Typography sx={{ opacity: 0.9, fontSize: 14, mb: 2 }}>
    //       {publishedAt.split('T')[0]}
    //     </Typography>
    //     <Button
    //       variant="contained"
    //       href={url}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       sx={{ ml: "auto" }} 
    //     >
    //        Read More
    //       </Button>
    //   </CardActions>
    //   </Box>
    // </Card>

    <Card
  sx={{
    display: 'flex',
    alignItems: 'stretch',  // Make both sides the same height
  }}
>
  {/* 🎯 Fixed square image */}
  <CardMedia
    component="img"
    image={imgSrc}
    alt={title}
    sx={{
      width: 150,      // fixed width
      height: 150,     // equal height for square
      objectFit: 'cover',  // crop or scale the image
    }}
  />

  {/* 📝 Content + Action container */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,            // Take remaining space
      p: 2,               // Padding around content
      justifyContent: 'space-between',  // Push button to bottom
    }}
  >
    {/* Title and Description */}
    <Box>
      <Typography component="div" variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>

    {/* Footer: Date left, Button bottom-right */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: 2,
      }}
    >
      <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
        {new Date(dateOnly).toLocaleDateString("en-GB", {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
      </Typography>
      <Box sx={{ flex: 1 }} /> {/* Spacer pushes button to the right */}
      <Button
        variant="contained"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </Button>
    </Box>
  </Box>
</Card>


  );
}
