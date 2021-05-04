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

export default function MaxRosen() {
  return (
    <>
      <div className="projectDesignation">2020-</div>
      <div className="modalBody maxRosen">
        <h1 className="modalHeader">maxrosen.town</h1>
        <div className="modalSubheading">
          personal website for director/editor Max Rosen{" "}
          <span className="lilCapsule">Work In Progress</span>
        </div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <div className="modalDetails">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              impedit numquam praesentium recusandae blanditiis quia sequi,
              repellat vel consectetur autem labore earum libero, quod minima
              culpa optio sapiente expedita alias!
            </p>

            <a href="https://imax.vercel.app" target="_blank">
              visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
