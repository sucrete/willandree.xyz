function FauxPost() {
  return (
    <div
      className="workContainer"
      style={{
        height: "185px",
        width: "375px",
        position: "relative !important",
      }}
    >
      <span
        className="artistName"
        style={{
          display: "inline",
          position: "relative !important",
          fontFamily: "Helvetica Neue, sans-serif",
          fontSize: ".8em",
          fontWeight: "500",
          marginRight: "10px",
          position: "relative",
          paddingRight: "20px",
        }}
      >
        FAUXreal
        <img src="/piskel.svg" className="dumpHeart" />
      </span>
      <img
        style={{ display: "inline" }}
        src="/balloon.gif"
        className="workComponent"
      />
    </div>
  );
}
function RoboPost() {
  return (
    <div
      className="workContainer"
      style={{
        position: "relative !important",
        display: "inline",
        width: "660px",
      }}
    >
      <span
        className="artistName"
        style={{
          display: "inline",
          position: "relative !important",
          fontFamily: "Helvetica Neue, sans-serif",
          fontSize: ".8em",
          fontWeight: "500",
          marginRight: "10px",
          position: "relative",
          paddingRight: "20px",
        }}
      >
        robocide
        <img src="/piskel.svg" className="dumpHeart" />
      </span>
      <img
        style={{ display: "inline", width: "auto", height: "320px" }}
        src="/dog.png"
        className="workComponent"
      />
      <img
        style={{ display: "inline", width: "250px", height: "auto" }}
        src="/fashion.png"
        className="workComponent"
      />
    </div>
  );
}
const slides = [
  <img style={{ height: "90px", width: "auto" }} src="/dumpTRUCKlogo.svg" />,
  <FauxPost />,
  <RoboPost />,
];
const imageSlides = slides.map((slide, index) => {
  return (
    <li
      key={`imagesforDumpTRUCK--${index}`}
      className={`liImage liImage--${index}`}
    >
      {slide}
    </li>
  );
});
function ReactCapsule() {
  return (
    <span style={{ color: "white", background: "blue" }} className="lilCapsule">
      React
    </span>
  );
}
function NextCapsule() {
  return (
    <span
      style={{ color: "white", background: "black", marginLeft: "3px" }}
      className="lilCapsule"
    >
      Next.js
    </span>
  );
}
export default function DumpTRUCK() {
  return (
    <>
      <div className="projectDesignation">2020</div>
      <div className="modalBody dumpTRUCK">
        <h1 className="modalHeader">dumpTRUCK</h1>
        <div className="modalSubheading">
          <ReactCapsule />
          <NextCapsule />
        </div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <h1 className="modalHeaderLower">dumpTRUCK</h1>
          <div className="modalSubheadingLower">
            <ReactCapsule /> <NextCapsule />
          </div>
          <div className="modalDetails">
            <p>
              dumpTRUCK was created to serve as a lasting home for a collection
              of work from some of the preeminent artists of the "
              <a
                href="https://www.artspace.com/magazine/interviews_features/trend_report/post_internet_art-52138"
                target="
            _black"
              >
                post-internet art
              </a>
              " era. dumpTRUCK takes it's name from{" "}
              <a
                href="https://sites.rhizome.org/surfclubs/#dump.fm"
                target="_blank"
              >
                dump.fm
              </a>
              , a chatroom where, in addition to text, users could paste arrays
              of images sourced from all corners of the web, often "remixing"
              (and "re-remixing") still images and gifs, making for an utterly
              novel form of artistic practice.
            </p>

            <a
              className="visitButton"
              href="https://dumptruck.vercel.app/"
              target="_blank"
            >
              visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
