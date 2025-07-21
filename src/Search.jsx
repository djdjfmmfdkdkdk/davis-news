import React from 'react';
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export const Search = () => {
  const { pathname } = useLocation(); 
  console.log(pathname);

  return (<div>Search</div>);
};