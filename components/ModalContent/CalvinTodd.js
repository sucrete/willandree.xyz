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
        <div className="modalSubheading">personal website</div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <h1 className="modalHeaderLower">calvintodd.com</h1>
          <div className="modalSubheadingLower">personal website</div>
          <div className="modalDetails">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              impedit numquam praesentium recusandae blanditiis quia sequi,
              repellat vel consectetur autem labore earum libero, quod minima
              culpa optio sapiente expedita alias!
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
