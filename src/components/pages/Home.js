import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../App.css';
import TableBanner from '../TableBanner';
import Cards from '../Cards';
/*import HeroSection from '../HeroSection';
import TableAssets from '../TableAssets';*/
import Footer from '../Footer';

function Home() {
  return (
    <>
      <TableBanner />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
