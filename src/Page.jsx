import { useEffect, useState } from 'react';
import MainArticle from './MainArticle';
import Article from './Article';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export const Page = ({ country, onCountryChange }) => {
  const { id } = useParams();
  console.log(country);
  const [visibleCount, setVisibleCount] = useState(9);
  const key = '9f4962393c4f41a9984fe2ce1bb0a267';
  const [mainArticle, setMainArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);
  useEffect(() => {
      // console.log(id);

    const fetchTop = async () => {
      // const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us' + `&category=${id}` + `&apiKey=${key}`;
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
      if (id) url += `&category=${encodeURIComponent(id)}`;
      try {
        const res = await fetch(url);
        const json = await res.json();
        const items = json.articles || [];
        if (items.length > 0) {
          setMainArticle(items[0]);
          setOtherArticles(items.slice(1, 16));
        }
      } catch (e) {
        console.error('Fetch error:', e);
      } 
    };
    fetchTop();
  }, [id]);


  if (!mainArticle) return <p>Loading...</p>;

  return (
  <>
  
    {/* <MainArticle article={mainArticle} />
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={5}>
        {otherArticles.slice(0, visibleCount).map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Article article={article} />
          </Grid>
        ))} 
      </Grid>  
    </Container>  */}
    <Container maxWidth="lg" sx={{py: 4 }}>
      <Grid container spacing={4} sx={{ justifyContent: 'space-between'}}>
        {/* Main article spanning the full width */}
        <Grid sx={{ width: '100%' }}>
          <MainArticle article={mainArticle} />
        </Grid>

        {/* Secondary articles in a 3-column layout */}
        {otherArticles.slice(0, visibleCount).map((article, index) => (
          <Grid flexGrow={1} key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Article article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>


    {visibleCount < otherArticles.length && (
      <Box sx={{ textAlign: 'center', mt: 2, mb: 2}}>
        <Button variant="contained" color='inherit' onClick={() => setVisibleCount(prev => prev + 3)}>
          Load More
        </Button>
      </Box>
    )}
  </>);
};


