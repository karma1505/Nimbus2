import { Metadata } from 'next';
import HeroSection from '../app/sections/HeroSection';
import Services from '../app/sections/Services';
import AboutUs from './sections/About';
import QualitySection from './sections/Quality';
import Footer from './sections/Footer';
import EnquiryPage from './sections/Enquiry';

export const metadata: Metadata = {
  title: 'Your Website | Home',
  description: 'Your website description',
  icons: {
    icon: '/favicon.ico',
  }, 
};

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <Services />
      <AboutUs />
      <QualitySection />
      <EnquiryPage />
      <Footer />
    </main>
  );
};

export default Home;
