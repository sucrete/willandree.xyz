import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>will andree</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>welcome to willandree.xyz</h1>
        <br />

        <p className={styles.description}>
          portfolio site of Will Andrée <br />
          <br />
          <div>
            <span style={{ color: "grey" }}>start server with</span>{" "}
            <code className={styles.code}>npm run dev</code>
          </div>
        </p>
      </main>
    </div>
  );
}
