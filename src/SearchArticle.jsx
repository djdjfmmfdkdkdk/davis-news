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
    const dateOnly = new Date(publishedAt.split('T')[0]).toLocaleDateString("en-GB", {
      day: 'numeric',
      month: 'long',
      year: 'numeric',});

  return (


    <Card
      sx={{
        display: 'flex',
        alignItems: 'stretch', // Make both sides the same height
        borderColor: 'grey.300'
      }}
    >
    {/* 🎯 Fixed square image */}
    <CardMedia
      component="img"
      image={imgSrc}
      alt={title}
      sx={{
        width: 150,      // fixed width
        height: 150, 
        p:2,    // equal height for square
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
          {dateOnly}
        </Typography>
        <Box sx={{ flex: 1 }} /> {/* Spacer pushes button to the right */}
        <Button
          variant="contained"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          color='inherit'
        >
          Read More
        </Button>
      </Box>
    </Box>
  </Card>

  );
}
