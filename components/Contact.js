import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
export default function Contact() {
  // const trail = useTrail(descriptionItems.length, {
  //   config: { mass: 5, tension: 2200, friction: 250 },
  //   opacity: 1,
  //   delay: 700,
  //   x: 0,
  //   from: { opacity: 0, x: 50 },
  // });
  return (
    <section id="contact" className="contact">
      <div className="contentContainer">
        <img src="/grid.svg" className="grid" alt="background svg image" />
        <div className="copyContainer">
          <div className="contactHeader">Contact</div>
        </div>
      </div>
    </section>
  );
}
