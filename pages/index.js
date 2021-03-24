import Head from "next/head";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Work from "../components/Work";
import Info from "../components/Info";
import Nav from "../components/Navigation";
import Resume from "../components/Resume";
import classNames from "classnames";
import { useEffect, useState } from "react";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

function Cursor() {
  if (typeof navigator !== "undefined" && isMobile()) return null;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    var emailLink = document.getElementsByClassName("resumePill")[0];
    emailLink.addEventListener("mouseenter", onMouseEnter);
    emailLink.addEventListener("mouseleave", onMouseLeave);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    var emailLink = document.getElementsByClassName("resumePill")[0];
    emailLink.removeEventListener("mouseenter", onMouseEnter);
    emailLink.removeEventListener("mouseleave", onMouseLeave);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };
  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const cursorClasses = classNames("resumeCursor", {
    "resumeCursor--hidden": hidden,
  });

  return (
    <img
      src="/pdf.svg"
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>wilondraydotekswhyzee</title>
        <link rel="icon" href="/5532_DuckWaddle.gif" />
      </Head>
      <main>
        <Cursor />
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
