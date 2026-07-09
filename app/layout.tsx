import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LabourAdda | Building India’s Digital Labour Infrastructure',
  description:
    'LabourAdda is India’s Digital Labour Infrastructure connecting verified workers, contractors and employers through AI-powered trust, Digital Labour Passport and QR verification.',

  openGraph: {
    title: 'LabourAdda',
    description:
      'Building India’s Digital Labour Infrastructure.',
    url: 'https://labour-adda-final-stable-backup.vercel.app/',
    siteName: 'LabourAdda',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'LabourAdda',
    description:
      'Building India’s Digital Labour Infrastructure.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
