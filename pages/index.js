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
        <section style={{ paddingLeft: "5rem" }}>
          <img className="window" src="/window.svg" />
        </section>
        <section>
          <p>
            <span className="TITLE2 title">Will Andrée</span>

            <br />
            <span className="dev">developer</span>
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
