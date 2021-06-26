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
              This site was built to exhibit the varied work of maker/singer/song-writer Calvin Todd. A turn-key approach: 
              I put together the site's structure, 
              e-commerce functionality, and some out-of-the-box graphic design; and being built on WordPress, Calvin could manage the content based on what he was working on at any given moment.
              <span className="tech">
                {" "}
                Made using WordPress, WooCommerce, and custom CSS.
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
