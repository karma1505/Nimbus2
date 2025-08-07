import WebDevelopmentServices from '../sections/Webdevelopment';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

const WebDevelopmentPage: React.FC = () => {
  // Service structured data
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "Professional web development services including custom website design, responsive development, and e-commerce platforms.",
    "provider": {
      "@type": "Organization",
      "name": "Nimbus Technologies Private Limited",
      "url": "https://nimbustechnologies.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Web Development",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

      return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceStructuredData),
          }}
        />
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/#services' },
              { label: 'Web Development' }
            ]} 
          />
        </div>
        <WebDevelopmentServices />
        <Footer />
      </main>
    );
};

export default WebDevelopmentPage; 