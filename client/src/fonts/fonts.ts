import { Inter, Orbitron, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
  weight: '500',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500'],
});

export { inter, orbitron, poppins };
