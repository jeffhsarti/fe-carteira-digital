import React from 'react';
import { ThemeProvider } from '@components/providers/ThemeProvider';
import '../app/globals.css';

export const metadata = {
  title: 'Careira Digital',
  description: 'Blog Carteira Digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          {children}
          <footer
            style={{
              textAlign: 'center',
              padding: '1rem 0',
              borderTop: '1px solid #ccc',
            }}
          >
            &copy; {new Date().getFullYear()} Carteira Digital App
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
