import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";
import ReachOut from "./ReachOut";

function Bod() {
  return (
    <div>
      In addition to my design work I teach practical web development skills
      with{" "}
      <a href="https://www.nucamp.co/" target="_blank" className="nucamp">
        {" "}
        Nucamp Coding Bootcamp
      </a>
      . If you are interested in collaborating or using my services, please,
      feel free to reach out.
    </div>
  );
}
const elements = [
  <Bod />,
  <br />,
  <ReachOut />,
  <br />,
  <img src="/me_2.jpeg" />,
];
export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const trail = useTrail(elements.length, {
    config: { mass: 5, tension: 2200, friction: 500 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });

  return (
    <section className="info">
      <div ref={ref} className="infoBody">
        {trail.map(({ x, ...rest }, index) => (
          <animated.span
            className={`aboutVerbiage aboutVerbiage--${index}`}
            key="aboutVerbiageOneTime"
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            {elements[index]}
          </animated.span>
        ))}
        <br />
      </div>
    </section>
  );
}
