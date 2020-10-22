import Head from "next/head";
// import window from "../public/window.svg";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Info from "../components/Info";

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
        <hr />
        <Info />
        <hr />
        <Contact />
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              id="grain"
              filterUnits="objectBoundingBox"
              color-interpolation-filters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                result="f1"
                stitchTiles="noStitch"
                baseFrequency="0.6"
                numOctaves="1"
                seed="0"
              />
              <feColorMatrix
                type="matrix"
                values="0.96     0     0     0     0    0     0.53     0     0     0    0     0     0.48     0     0     0     0     0     1     0 "
              />
              <feColorMatrix type="luminanceToAlpha" in="f2" result="f3" />
              <feComposite
                in="SourceGraphic"
                in2="f3"
                result="f4"
                operator="in"
              />
              <feColorMatrix
                type="matrix"
                values="1 0 0 0 0.22      0 1 0 0 0.22      0 0 1 0 0.22      0 0 0 1 0"
                in="f4"
                result="f5"
              />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode in="f5" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </main>
    </div>
  );
}
