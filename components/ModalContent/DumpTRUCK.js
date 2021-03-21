const slides = [
  { id: 0, url: "/dumpTRUCKlogo.svg" },
  { id: 1, url: "/thistle.png" },
  { id: 2, url: "/5532_DuckWaddle.gif" },
];

export default function DumpTRUCK() {
  return (
    <>
      <div className="projectDesignation">2020</div>
      <div className="modalBody">
        <h1 className="modalHeader">dumpTRUCK</h1>
        <div className="modalContent">
          <div className="modalImagesContainer"></div>
          <div className="modalDetails"></div>
        </div>
      </div>
    </>
  );
}
