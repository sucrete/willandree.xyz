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
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud2-2"></div>
        <div className="cloud cloud3"></div>
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

      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
      </svg>
      <svg>
        <filter id="filter2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".008"
            numOctaves="9"
          />
          <feDisplacementMap in="SourceGraphic" scale="225" />
        </filter>
      </svg>
      <svg>
        <filter id="filter2-2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".008"
            numOctaves="9"
          />
          <feDisplacementMap in="SourceGraphic" scale="190" />
        </filter>
      </svg>
    </div>
  );
}
