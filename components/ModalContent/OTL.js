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
function ReactCapsule() {
  return (
<span style={{ color: "white", background: "blue"}}className="lilCapsule">
            React
          </span>
  )
}
function NextCapsule() {
  return (
<span style={{ color: "white", background: "black", marginLeft: "3px"}}className="lilCapsule">
            Next.js
          </span>
  )
}
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
          
          <ReactCapsule/><NextCapsule/><span style={{ marginLeft: "3px"}} className="lilCapsule lilCapsule--OTL">Prototype</span>
        </div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <h1 className="modalHeaderLower">Old Town Lofts</h1>
          <div className="modalSubheadingLower"><ReactCapsule/><NextCapsule/><span style={{ marginLeft: "3px"}} className="lilCapsule lilCapsule--OTL">Prototype</span>
          </div>
          <div className="modalDetails">
            <p>
              Old Town Lofts is a leasing company serving downtown Kansas City.
              In partnership with the local government Old Town Lofts has retrofitted dozens of underutilized buildings as part of a rather successful effort to provide
              modern, affordable housing for scores of middle-income families.
              And they have an{" "}
              <a href="https://www.oldtownloftskc.com/" target="_blank">
                utterly garbage website
              </a>
              . This was the prototype I presented to them that, due to a number of constraints, could not be adapted for use. 🙁
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
