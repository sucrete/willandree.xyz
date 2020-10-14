import Head from "next/head";
// import window from "../public/window.svg";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wilondraydotekswhyzee</title>
        <link rel="icon" href="/5532_DuckWaddle.gif" />
      </Head>

      <main>
        <Header />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
