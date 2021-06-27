function MaxPic() {
  return (
    <div class="frame__outside">
      <div class="frame__inside">
        <div class="matte">
          <div
            class="picture"
            style={{
              backgroundImage: `url("/spaceMax.jpg")`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
const slides = [
  <img src="/imax15.png" />,
  <img src="/imax12.png" />,
  <MaxPic />,
];
const imageSlides = slides.map((slide, index) => {
  return <li className={`liImage liImage--${index}`}>{slide}</li>;
});
function ReactCapsule() {
  return (
<span style={{ color: "white", background: "blue", marginLeft: "3px"}}className="lilCapsule lilCapsule--React">
            React
          </span>
  )
}
function ReactSpringCapsule() {
  return (
<span style={{ color: "white", background: "#ef696c", marginLeft: "3px"}} className="lilCapsule lilCapsule--React">
            React Spring
          </span>
  )
}
export default function MaxRosen() {
  return (
    <>
      <div className="projectDesignation">2020-</div>
      <div className="modalBody maxRosen">
        <h1 className="modalHeader">maxrosen.town</h1>
        <div className="modalSubheading">
          <span className="lilCapsule lilCapsule--maxRosen">
            Work In Progress
          </span>
          <ReactCapsule/>
          <ReactSpringCapsule/>
        </div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <h1 className="modalHeaderLower">maxrosen.town</h1>
          <div className="modalSubheadingLower">
            <span className="lilCapsule lilCapsule--maxRosen">
              Work In Progress
            </span>
            <ReactCapsule/>
            <ReactSpringCapsule/>
          </div>
          <div className="modalDetails">
            <p>
              Personal website for Vice News/Bloomberg Business/Disney+ director
              and editor, Max Rosen.
            </p>

            <a
              className="visitButton"
              href="https://imax.vercel.app"
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
