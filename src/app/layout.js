import './globals.css';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '900'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
});

export const metadata = {
  title: 'Zenith Global University — Rise Beyond Limits',
  description: 'Zenith Global University, Kampala Uganda. World-class education, global vision.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}