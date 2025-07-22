import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Article({article}) {
    const PLACEHOLDER =
    "https://port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png";

    const { urlToImage, title, description, publishedAt, url } = article;
    const imgSrc = urlToImage || PLACEHOLDER;
  return (

    <Card sx={{ maxWidth: 345, height: 380 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography sx={{ opacity: 0.9, fontSize: 14, mb: 2 }}>
          {publishedAt.split('T')[0]}
        </Typography>
        <Button
            variant="contained"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: "auto" }} 
          >
            Read More
          </Button>
      </CardActions>
    </Card>
  );
}
