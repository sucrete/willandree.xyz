function ACard() {
  return (
    <div className="parentCardContainer">
      <div class="cardContainer">
        <div class="bizCard">
          <img src="/corner.svg" className="corner TL" />
          <img src="/corner.svg" className="corner TR" />
          <img src="/corner.svg" className="corner BL" />
          <img src="/corner.svg" className="corner BR" />
          <div className="innerFrame"></div>
          <div className="mask"></div>
          <div className="quoteBox">
            <img src="/affordable.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
const slides = [
  <img className="oldTownLogo" src="/oldtownlogo.png" />,
  <img className="desaturatedBuilding" src="/COVER_8desaturated.png" />,
  <ACard />,
];
const imageSlides = slides.map((slide, index) => {
  return <li className={`liImage liImage--${index}`}>{slide}</li>;
});
export default function OTL() {
  return (
    <>
      <div className="projectDesignation">2020</div>

      <div className="modalBody OTL">
        <h1 className="modalHeader">Old Town Lofts</h1>
        <div className="modalSubheading">
          <span className="lilCapsule lilCapsule--OTL">Prototype</span>
        </div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <h1 className="modalHeaderLower">Old Town Lofts</h1>
          <div className="modalSubheadingLower">
            <span className="lilCapsule lilCapsule--OTL">Prototype</span>
          </div>
          <div className="modalDetails">
            <p>
              Old Town Lofts is a leasing company serving downtown Kansas City.
              In partnership with the local government they have retrofitted
              derelict or underutilized buildings from the Crossroads to the
              River Market as part of a rather successful effort to provide
              modern, affordable housing for scores of middle-income families.
              And they have a{" "}
              <a href="https://www.oldtownloftskc.com/" target="_blank">
                truly terrible website
              </a>
              . This was the proof of concept I presented to them that, for
              reasons of excessive red tape, could not be adapted for their use.
              C'est la vie.
              <span className="tech"> Tech: React and Next.js.</span>
            </p>

            <a
              className="visitButton"
              href="https://oldtownloftskc.vercel.app"
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
