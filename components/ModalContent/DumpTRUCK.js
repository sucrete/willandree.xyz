const slides = [
  { id: 0, url: "/dumpTRUCKlogo.svg" },
  { id: 1, url: "/thistle.png" },
  { id: 2, url: "/5532_DuckWaddle.gif" },
];
const imageSlides = slides.map((slide, index) => {
  return (
    <li>
      <img src={`${slide.url}`} alt="" />
    </li>
  );
});
export default function DumpTRUCK() {
  return (
    <>
      <div className="projectDesignation">2020</div>
      <div className="modalBody">
        <h1 className="modalHeader">dumpTRUCK</h1>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>{imageSlides}</ul>
          </div>
          <div className="modalDetails"></div>
        </div>
      </div>
    </>
  );
}
