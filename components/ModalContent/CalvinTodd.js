const slides = [
  <img src="/calcal.png" />,
  <img src="/CalTittle.png" />,
  <img src="/calvincircle.png" />,
  <img src="/CalLeather.png" />,
];
const imageSlides = slides.map((slide, index) => {
  return <li key={`imagesforCal--${index}`} className={`liImage liImage--${index}`}>{slide}</li>;
});
function WordPressCapsule() {
  return (
    <span className="lilCapsule" style={{color: "rgb(92, 64, 43)", background: "#ebe3da"}}>WordPress</span>
  )
}
export default function CalvinTodd() {
  return (
    <>
      <div className="projectDesignation">2019</div>
      <div className="modalBody calvinTodd">
        <h1 className="modalHeader">calvintodd.com</h1>
        <div className="modalSubheading"><WordPressCapsule/></div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <h1 className="modalHeaderLower">calvintodd.com</h1>
          <div className="modalSubheadingLower" style={{ color: "white" }}>
            <WordPressCapsule/>
          </div>
          <div className="modalDetails">
            <p>
              This site was built to exhibit the various work of maker/singer/song-writer Calvin Todd. Using WordPress, the overall structure, e-commerce functionality, and some out-of-the-box graphic design were created so, even as a layperson, Calvin could readily begin creating his own content.
  
            </p>

            {/* <a
              className="visitButton"
              href="https://www.calvintodd.com"
              target="_blank"
            >
              visit
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
