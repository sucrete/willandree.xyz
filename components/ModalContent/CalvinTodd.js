const slides = [
  <img src="/calcal.png" />,
  <img src="/CalTittle.png" />,
  <img src="/calvincircle.png" />,
  <img src="/CalLeather.png" />,
];
const imageSlides = slides.map((slide, index) => {
  return <li className={`liImage liImage--${index}`}>{slide}</li>;
});
export default function CalvinTodd() {
  return (
    <>
      <div className="projectDesignation">2019</div>

      <div className="modalBody calvinTodd">
        <h1 className="modalHeader">calvintodd.com</h1>
        <div className="modalSubheading"></div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <h1 className="modalHeaderLower">calvintodd.com</h1>
          <div className="modalSubheadingLower" style={{ color: "white" }}>
            |{" "}
          </div>
          <div className="modalDetails">
            <p>
              This site was built to exhibit the various work of maker/singer/song-writer Calvin Todd. Finding a turn-key approach worked best, the overall structure, e-commerce functionality, and some out-of-the-box graphic design were prepared for a WordPress site
              <span className="tech">
                {" "}
                Made using WordPress and custom CSS.
              </span>
            </p>

            <a
              className="visitButton"
              href="https://www.calvintodd.com"
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
