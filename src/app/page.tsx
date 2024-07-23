import Head from 'next/head';
import HeroSection from '../app/sections/HeroSection';
import Services from '../app/sections/Services';
import AboutUs from './sections/About';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Your Website | Home</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>

      <main>
        <HeroSection />   
        <Services />
        <AboutUs />
      </main>
    </>
  );
};

export default Home;
