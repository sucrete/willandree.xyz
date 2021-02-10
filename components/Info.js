import { useInView } from "react-intersection-observer";
export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  return (
    <section id="info" className="info">
      <span className={`title inView${inView}Title`}>Info</span>
      <div className="infoBody">
        <div className={`education inView${inView}`}>
          <div className="educationHeader">Education</div>
          <div className="educationBody">
            <div></div>
          </div>
        </div>
        <div className={`aboutMe inView${inView}AboutMe inView${inView}`}>
          {" "}
          <p ref={ref}>
            About me Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis egestas ipsum nulla, in ultrices metus cursus non. Curabitur
            dapibus ipsum et nulla pulvinar, quis faucibus mauris semper.
          </p>
        </div>
      </div>
    </section>
  );
}
