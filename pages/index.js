import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Info from "../components/Info";
import Nav from "../components/Navigation";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wilondraydotekswhyzee</title>
        <link rel="icon" href="/5532_DuckWaddle.gif" />
      </Head>

      <main>
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud2-2"></div>
        <div className="cloud cloud3"></div>
        <div className="noise"></div>
        <Nav />
        <Header />
        <Work />
        <Info />
        {/* <Contact/> */}
      </main>
    </div>
  );
}
