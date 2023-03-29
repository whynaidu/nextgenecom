import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import CategoriesPanel from '@/components/Home/categoriesPanel'
import MainBanner from '@/components/Home/MainBanner'
import {FeaturedProductCards} from "@/components/Home/ProductCards";
import {ProductCards} from "@/components/Home/ProductCards";

import MiddleBanner from '@/components/Home/MiddleBanner'
import { Footer } from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Header />
        <CategoriesPanel />
        <MainBanner />
        <FeaturedProductCards />
        <MiddleBanner />
        <ProductCards />
        <Footer/>
      </main>
    </>
  );
}
