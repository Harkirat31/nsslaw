import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif } from 'next/font/google'
import Header from "@/components/header";
 
// If loading a variable font, you don't need to specify the font weight
const inter = Noto_Serif({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: "NSS Law Office",
  description: "Barrister, Solicitor & Notary Public",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${inter.className}  antialiased`}
      >
     
        <Header></Header>
        
        {children}
      </body>
    </html>
  );
}
