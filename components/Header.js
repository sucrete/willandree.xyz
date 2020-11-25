export default function Header() {
  const descriptionItems = [
    "i am a front-",
    "end web developer",
    "and graphic designer",
    "trying to make",
    "work that fux",
  ];
  const werk = descriptionItems.map((item, index) => (
    <div className={`descItem${index}`}>{item}</div>
  ));
  return (
    <section className="header">
      <div className="descriptionContainer">
        {/* <div className="iAmContainer rotate-wrap">
          <div class="box box-rotate box-rotate-gyro">
            <h1>i am</h1>
          </div>
        </div> */}
        <p className="description">{werk}</p>
      </div>
    </section>
  );
}
