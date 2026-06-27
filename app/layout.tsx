import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ChargeFast | Fast charging gear',
  description: 'MagSafe stations, USB-C cables, solar charging panels and fast charging solutions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
