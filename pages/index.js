import Head from "next/head";
// import window from "../public/window.svg";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Info from "../components/Info";
import Nav from "../components/Navigation";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wilondraydotekswhyzee</title>
        <link rel="icon" href="/5532_DuckWaddle.gif" />
      </Head>

      <main>
        <div className="noise"></div>
        <Nav />
        {/* <hr /> */}
        <Header />
        <Work />
        <hr />
        <Info />
        <hr />
        <Contact />
      </main>
    </div>
  );
}
