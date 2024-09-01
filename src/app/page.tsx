import { Metadata } from 'next';
import HeroSection from '../app/sections/HeroSection';
import Services from '../app/sections/Services';
import AboutUs from './sections/About';
import QualitySection from './sections/Quality';
import Footer from './sections/Footer';
import EnquiryPage from './sections/Enquiry';
import Navbar from './components/Navbar'; // Import the Navbar component

export const metadata: Metadata = {
  title: 'Nimbus Technologies',
  description: 'Your one stop destination for all your software development needs',
  icons: {
    icon: '/favicon.ico',
  }, 
};

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
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
