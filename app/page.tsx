import React from 'react';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import HotDeals from './components/HotDeals';
import Banner from './components/Banner';
import styles from '../styles/Home.module.css';
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
  <Banner imageSrc="/images/oven.png" width={200} height={200} />
  <Banner imageSrc="/images/kitchenware.png" width={200} height={200} />
  <Banner imageSrc="/images/luggage.png" width={200} height={200} />
  <Banner imageSrc="/images/fridge.png" width={200} height={200} />
  <Banner imageSrc="/images/washing-machine.png" width={200} height={200} />
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
