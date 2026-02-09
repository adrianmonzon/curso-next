import { Montserrat } from 'next/font/google';

// Configurar la fuente Montserrat desde Google Fonts
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});
