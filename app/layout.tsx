import { montserrat } from './ui/fonts';
import './ui/global.css'; // Hay que importar siempre los estilos que vienen ya predefinidos para que se apliquen al archivo que queramos y empiece a coger forma

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        Esto es layout
          {children}
          <footer>
            Este es el footer
          </footer>
      </body>
    </html>
  );
}
