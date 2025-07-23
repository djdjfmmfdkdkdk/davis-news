
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function MainArticle({ article }) {
  const PLACEHOLDER =
    "https://port2flavors.com/wp-content/uploads/2022/07/placeholder-614.png";

  const { urlToImage, title, description, publishedAt, url } = article;
  const imgSrc = urlToImage || PLACEHOLDER;
  const noDescription = description || "No description available.";
  const dateOnly = publishedAt.split('T')[0]

  return (
    <Card
      variant="outlined"
      sx={{
        position: 'relative',
        height: { xs: 400, md: 500 },
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        borderRadius: 2,
        overflow: 'hidden',
        mb: 4,
        textAlign: 'left',
      }}
    >
      {/* Background image with dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }}
      />

      {/* Foreground content */}
      <CardContent
        sx={{
          position: 'relative',
          zIndex: 2,
          color: 'white',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          mt: 'auto',
          pb: 6,
          px: { xs: 3, md: 4 },
        }}
      >
        <Typography
          gutterBottom
          sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 700 }}
        >
          {title}
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }}>
          {noDescription}
        </Typography>

        <Typography sx={{ opacity: 0.9, fontSize: 14, mb: 2 }}>
          {new Date(dateOnly).toLocaleDateString("en-GB", {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
          <Button
            variant="contained"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ml: "auto" }} 
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
