import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mobile App Development Services - iOS & Android Development | Nimbus Technologies',
  description: 'Professional mobile app development services including iOS, Android, and cross-platform development. Get custom mobile apps built by experts for your business needs.',
  keywords: [
    'mobile app development services',
    'iOS app development',
    'Android app development',
    'cross-platform app development',
    'custom mobile apps',
    'app development company',
    'mobile app design',
    'app development services'
  ],
  openGraph: {
    title: 'Mobile App Development Services - iOS & Android Development',
    description: 'Professional mobile app development services including iOS, Android, and cross-platform development.',
    url: 'https://nimbustechnologies.in/app-development',
    images: [
      {
        url: '/app-development-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Services - Nimbus Technologies',
      },
    ],
  },
  alternates: {
    canonical: 'https://nimbustechnologies.in/app-development',
  },
};

export default function AppDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 