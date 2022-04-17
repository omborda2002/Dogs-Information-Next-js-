import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <div className={styles.maino}><h1>Hey It&apos;s Home</h1></div>
      </DefaultLayout>
    </div>
  );
}
