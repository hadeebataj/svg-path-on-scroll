import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import ScrollSVG from '@/components/ScrollSvg';

export default function Home() {
  return (
    <>
      <Head>
        <title>SVG Path Scroll</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <h1>SVG Path Scroll</h1>
        <ScrollSVG />
      </main>
    </>
  );
}
