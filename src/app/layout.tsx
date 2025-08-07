import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#3B82F6',
};

export const metadata: Metadata = {
  title: {
    default: "Nimbus Technologies - Leading Software Development & Web Design Services",
    template: "%s | Nimbus Technologies"
  },
  description: "Nimbus Technologies delivers custom software development, web design, and mobile app development services. Transform your business with tailored digital solutions and innovative technology.",
  keywords: [
    "custom software development company",
    "web design and development services",
    "mobile app development company",
    "custom business software solutions",
    "Nimbus Technologies",
    "custom website development",
    "Android iOS app development",
    "business process optimization",
    "responsive web design",
    "e-commerce development"
  ],
  authors: [{ name: "Nimbus Technologies Private Limited" }],
  creator: "Nimbus Technologies Private Limited",
  publisher: "Nimbus Technologies Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nimbustechnologies.in'),
  alternates: {
    canonical: 'https://nimbustechnologies.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nimbustechnologies.in',
    siteName: 'Nimbus Technologies',
    title: 'Nimbus Technologies - Software Development & Web Design',
    description: 'Transform your business with custom software development, web design, and mobile app development services from Nimbus Technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nimbus Technologies - Software Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimbus Technologies - Leading Software Development Company',
    description: 'Custom software solutions, web development, and mobile app development services.',
    images: ['/twitter-image.jpg'],
    creator: '@nimbustech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Nimbus Technologies',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

// Structured data for organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nimbus Technologies Private Limited",
  "url": "https://nimbustechnologies.in",
  "logo": "https://nimbustechnologies.in/logoupdate.png",
  "description": "Leading software development company offering custom web development, mobile app development, and digital solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/nimbus-technologies",
    "https://www.facebook.com/nimbustechnologies",
    "https://twitter.com/nimbustech"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "10-50",
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
