import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainArticle from './MainArticle';
import Article from './Article';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export const Page = () => {
  // console.log(REACT_APP_NEWS_API_KEY);
  const key = '5dbd5c89f7b04eb9a46a3014fdaf6738';
  const [mainArticle, setMainArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);
  useEffect(() => {
    const fetchTop = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
      try {
        const res = await fetch(url);
        const json = await res.json();
        const items = json.articles || [];
        if (items.length > 0) {
          setMainArticle(items[0]);
          setOtherArticles(items.slice(1, 10));
        }
      } catch (e) {
        console.error('Fetch error:', e);
      } 
    };
    fetchTop();
  }, []);

  // console.log(article);

  if (!mainArticle) return <p>Loading...</p>;

  return (
  <>
    <MainArticle article={mainArticle} />
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {otherArticles.length > 0 && otherArticles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Article article={article} />
          </Grid>
        ))} 
      </Grid>  
    </Container> 
  </>);
};


