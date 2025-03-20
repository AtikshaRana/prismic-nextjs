import type { Metadata } from 'next'
import clsx from 'clsx';
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { createClient , repositoryName } from "@/prismicio";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PrismicPreview } from '@prismicio/next';
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})



export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");
 
  return {
    title: page.data.meta_description || "Flowrise fallback " ,
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(nunito.variable , nunitoSans.variable)}
      >
        <Header/>
        {children}
        < Footer/>
        <PrismicPreview repositoryName={repositoryName}></PrismicPreview>
      </body>
    </html>
  );
}
