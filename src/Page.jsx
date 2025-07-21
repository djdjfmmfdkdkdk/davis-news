import React from 'react';
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export const Page = () => {
  const { pathname } = useLocation(); // gets the :id from URL
  React.useEffect(() => {
    console.log('Path changed →', pathname);
  }, [pathname]);
//   console.log(pathname);
  

  return (<div>Page</div>);
};