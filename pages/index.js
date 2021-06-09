import Head from "next/head";
import Header from "../components/Header";
import Work from "../components/Work";
import Info from "../components/Info";
import Nav from "../components/Navigation";
import Favorites from "../components/Favorites";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chez Andrée</title>
        <link rel="icon" href="/5532_DuckWaddle.gif" />
      </Head>
      <main>
        <Nav />
        <Header />
        <Work />
        <Favorites />
        <Info />
      </main>
    </div>
  );
}
