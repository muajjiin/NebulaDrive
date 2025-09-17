import type { Metadata } from "next";
 import { Poppins } from 'next/font/google'
import "./globals.css";



 const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
})
export const metadata: Metadata = {
  title: "NebulaDrive",
  description: "Your digital universe, in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
