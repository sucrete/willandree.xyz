import Head from "next/head";
// import window from "../public/window.svg";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wilondraydotekswhyzee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="firstSection">
          <div className="flowerContainer">
            <div className="windowBackground"></div>
            <img className="window" src="/window.svg" />
          </div>
        </section>
        <section>
          <p>
            <span className="TITLE2 title">Will Andrée</span>
          </p>
        </section>

        <section>
          <p>
            <span className="TITLE11 title">Will Andrée</span>
          </p>
        </section>
      </main>
    </div>
  );
}
