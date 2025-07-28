import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Article({ article }) {
    const PLACEHOLDER =
    "https://port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png";

    const { urlToImage, title, description, publishedAt, url } = article;
    const imgSrc = urlToImage || PLACEHOLDER;
    const noDescription = description || "No description available.";
    const dateOnly = new Date(publishedAt.split('T')[0]).toLocaleDateString("en-GB", {
            day: 'numeric',
            month: 'long',
            year: 'numeric',});
  return (

    <Card sx={{ borderRadius: 2, color: 'inherit'}}>
      <CardMedia
        component="img"
        height="140"
        image={imgSrc}
      />
      <CardContent>
        <Typography sx={{ 
          fontSize: 20,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: 'text.primary'
        }} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" 
          sx={{
            color: 'text.secondary',
            display: '-webkit-box',
            WebkitLineClamp: 3, // you can set this to 2 or 3 lines
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minHeight: '4rem'
          }}>
          {noDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ opacity: 0.9, fontSize: 14, mb: 2, ml:1, color: 'text.primary' }}>
          {dateOnly}
        </Typography>
        <Button
            variant="contained"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            color='inherit'
            sx={{ ml: "auto" }} 
          >
            Read More
          </Button>
      </CardActions>
    </Card>
  );
}
