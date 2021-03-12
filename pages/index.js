import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Info from "../components/Info";
import Nav from "../components/Navigation";
import Favorites from "../components/Favorites";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wilondraydotekswhyzee</title>
        <link rel="icon" href="/5532_DuckWaddle.gif" />
        <script
          src="https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"
          defer
        ></script>
      </Head>
      <main>
        <img src="../roman.png" />
        <Nav />
        <Header />
        <Work />
        <Favorites />
        <Info />
        {/* <Contact/> */}
      </main>
    </div>
  );
}
