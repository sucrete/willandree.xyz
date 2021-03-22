import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Info from "../components/Info";
import Nav from "../components/Navigation";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wilondraydotekswhyzee</title>
        <link rel="icon" href="/5532_DuckWaddle.gif" />
      </Head>
      <main>
        <Nav />
        <Header />
        <Work />
        <Info />
        <Contact />
        <Resume />
      </main>
    </div>
  );
}
