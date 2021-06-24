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
              In an effort to present the varied works of maker and
              singer/song-writer Calvin Todd, this website was built with a
              turn-key approach in mind; I provided some out-of-the-box graphic
              design and, using Wordpress, created the website's framework;
              Calvin could
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
