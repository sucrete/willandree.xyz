import { useInView } from "react-intersection-observer";
export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <section id="info" className="info">
      <h1 className={`title inView${inView}Title`}>Info</h1>
      <div className="infoBody">
        <div className={`education inView${inView}`}>
          <h1>education</h1>
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
