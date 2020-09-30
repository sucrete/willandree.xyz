import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wilondraydotekswhyzee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <p>
            <span className="hello">hello</span>
          </p>
          <br />
          <p className="TITLE">
            Will Andrée <br />
            <br />
          </p>
        </section>
        <section>
          <p>
            <span className="TITLE2">Will Andrée</span>

            <br />
            <span className="dev">developer</span>
          </p>
        </section>
      </main>
    </div>
  );
}
