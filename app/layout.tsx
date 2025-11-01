import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const geist = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SkyMesh Dynamics - Building the IT Infrastructure of the Future',
  description:
    'Revolutionizing cloud hosting with AI-powered distributed solutions. Autonomous, adaptive, and always connected.',
  icons: '/logo.png',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={cn(geist.className, geistMono.className, 'font-sans antialiased')}>
        <div className='fixed inset-0 -z-10 bg-slate-950'>
          <div className='absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl' />
        </div>
        {children}
      </body>
    </html>
  );
}
