import Head from "next/head";
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
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud2-2"></div>
        <div className="cloud cloud3"></div>
        <div className="noise"></div>
        <Nav />
        <Header />
        <Work />
        <hr />
        <Info />
        <hr />
        <Contact />
      </main>

      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>

        <filter id="filter2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="220" />
        </filter>

        <filter id="filter2-2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".015"
            numOctaves="3"
          />
          <feDisplacementMap in="SourceGraphic" scale="300" />
        </filter>
        <filter id="filter3">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".009"
            numOctaves="5"
          />
          <feDisplacementMap in="SourceGraphic" scale="280" />
        </filter>
      </svg>
    </div>
  );
}
