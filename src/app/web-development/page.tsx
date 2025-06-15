import { Metadata } from 'next';
import WebDevelopmentServices from '../sections/Webdevelopment';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

export const metadata: Metadata = {
  title: 'Web Development Services - Nimbus Technologies',
  description: 'Professional web development services including custom web development, responsive design, CMS, e-commerce, and more.',
  icons: {
    icon: '/logoupdate.ico',
  }, 
};

const WebDevelopmentPage: React.FC = () => {
  return (
    <main>
      <Navbar />
      <WebDevelopmentServices />
      <Footer />
    </main>
  );
};

export default WebDevelopmentPage; 