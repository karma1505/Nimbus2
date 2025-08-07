import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services - Custom Website Design & Development | Nimbus Technologies',
  description: 'Professional web development services including custom website design, responsive development, e-commerce platforms, and API integration. Get your perfect website built by experts.',
  keywords: [
    'web development services',
    'custom website design',
    'responsive web design',
    'e-commerce website development',
    'API integration services',
    'website maintenance',
    'web design and development',
    'custom web development'
  ],
  openGraph: {
    title: 'Web Development Services - Custom Website Design & Development',
    description: 'Professional web development services including custom design, responsive development, and e-commerce solutions.',
    url: 'https://nimbustechnologies.in/web-development',
    images: [
      {
        url: '/web-development-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development Services - Nimbus Technologies',
      },
    ],
  },
  alternates: {
    canonical: 'https://nimbustechnologies.in/web-development',
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 