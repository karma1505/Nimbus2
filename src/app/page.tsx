import { Metadata } from 'next';
import HeroSection from '../app/sections/HeroSection';
import Services from '../app/sections/Services';
import About from './sections/About';
import QualitySection from './sections/Quality';
import Footer from './sections/Footer';
import EnquiryPage from './sections/Enquiry';
import Navbar from './components/Navbar';
import FAQSection from './sections/FAQ';

export const metadata: Metadata = {
  title: 'Nimbus Technologies - Software Development & Web Design',
  description: 'Transform your business with Nimbus Technologies. Custom software development, web design, and mobile app development services that drive growth.',
  keywords: [
    'custom software development company',
    'web design and development services',
    'mobile app development company',
    'custom business software solutions',
    'Nimbus Technologies',
    'custom website development',
    'Android iOS app development',
    'business process optimization'
  ],
  openGraph: {
    title: 'Nimbus Technologies - Custom Software Development & Web Solutions',
    description: 'Transform your business with innovative software solutions. Custom web development, mobile apps, and digital transformation services.',
    url: 'https://nimbustechnologies.in',
    siteName: 'Nimbus Technologies',
    images: [
      {
        url: '/homepage-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Nimbus Technologies - Software Development Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimbus Technologies - Custom Software Development & Web Solutions',
    description: 'Transform your business with innovative software solutions.',
    images: ['/homepage-twitter.jpg'],
  },
};

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <QualitySection />
      <EnquiryPage />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Home;
