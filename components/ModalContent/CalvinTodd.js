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
              This website, for maker/singer/song-writer Calvin Todd, was built
              as a turn-key approach for exhibiting Calvin's varied work; I
              provided him some out-of-the-box graphic design and, using
              WordPress, put together the website's basic structure and
              e-commerce functionality; using the CMS, Calvin could easily edit
              content based on his aesthetic needs.
              <span className="tech">
                {" "}
                Tech: WordPress, WooCommerce, and custom CSS.
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
