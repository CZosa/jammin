import Head from 'next/head';
import NavBar from '../src/components/NavBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jammin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div>Homepage</div>
    </div>
  );
}
