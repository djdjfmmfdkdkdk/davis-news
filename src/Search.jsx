import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import MainArticle from './MainArticle';
import Article from './Article';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SearchBar from './SearchBar';
import SearchArticle from './SearchArticle';
import Button from '@mui/material/Button';



export const Search = ({ country, onCountryChange }) => {
  console.log(country);
  const { pathname } = useLocation(); 
  // const keyword = 'trump'
  const [visibleCount, setVisibleCount] = useState(3);

  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [otherArticles, setOtherArticles] = useState([]);

  const key = '9f4962393c4f41a9984fe2ce1bb0a267'; 

  const handleSearch = (query) => {
    setKeyword(query);
  };

    useEffect(() => {
      setVisibleCount(3);
    }, [keyword]);

    useEffect(() => {
        // console.log(id);
      if (!keyword) {
        setOtherArticles([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setOtherArticles([]);

      const fetchTop = async () => {
        setLoading(true);
        // const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us' + `&category=${id}` + `&apiKey=${key}`;
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
        if (keyword) url += `&q=${encodeURIComponent(keyword)}`;
        try {
          const res = await fetch(url);
          const json = await res.json();
          const items = json.articles || [];
          if (items.length > 0) {
            setOtherArticles(items);
          }
        } catch (e) {
          console.error('Fetch error:', e);
          setOtherArticles([]);
        } finally {
          setLoading(false);
        }
      };
      fetchTop();
      console.log(otherArticles);
    }, [keyword]);

  
  return (

      <>

        <SearchBar onSearch={handleSearch} />

        <Container maxWidth="lg" sx={{ py: 4 }}>
            {loading && <p>Loading...</p>}
            {!loading && otherArticles.length === 0 && keyword && (
              <p>No results found.</p>
           )}
          {!loading && otherArticles.length > 0 && (
            <Grid container spacing={5} sx={{ flexDirection: 'column' }}>
              {otherArticles.slice(0, visibleCount).map((article, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <SearchArticle article={article} />
                </Grid>
              ))} 
            </Grid>
          )}
        </Container> 
        {visibleCount < otherArticles.length && (
          <Box sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
            <Button variant="contained" color='inherit' onClick={() => setVisibleCount(prev => prev + 3)}>
              Load More
            </Button>
          </Box>
        )}

        

    </>

  );
};