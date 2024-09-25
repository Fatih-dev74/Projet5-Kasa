import React from 'react';
import Banner from '../components/Banner';
import BannerImg from '../assets/images/paysage-mer.webp';
import Gallery  from '../components/Gallery';

const Home = () => {
  return (
    <div>
      <Banner img={BannerImg} alt="Des falaises en bord de mer" txt1={"Chez vous,"} txt2={"partout et ailleurs"}/>
      <Gallery />
    </div>
  );
};

export default Home;