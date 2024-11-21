import React from 'react';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import HotDeals from './components/HotDeals';
import Banner from './components/Banner';
import styles from '../components/Home.module.css';
import FeaturesSection from './components/FeaturesSection';
import ImageOverlay from './components/ImageOverlay';

const Home: React.FC = () => {
  return (
    <>
      <main>
        <HeroSection />
        <div>
          <HotDeals />
        </div>
        <div className={styles.grid}>
  <Banner imageSrc="/images/oven.png" />
  <Banner imageSrc="/images/kitchenware.png" />
  <Banner imageSrc="/images/luggage.png" />
  <Banner imageSrc="/images/fridge.png" />
  <Banner imageSrc="/images/washing-machine.png" />
</div>


    <ProductGrid title="Products you may Like" />
        
        <ImageOverlay
          imageSrc="/images/ImageOverlay.png"
          title="Mansoury"         // 
          description="Steel 10-Piece
                         Cookware Set"
        />
        
        <FeaturesSection />
      </main>
    </>
  );
};

export default Home;
