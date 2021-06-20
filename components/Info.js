import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";
import ReachOut from "./ReachOut";
import Photogs from "./Photogs";

export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });

  return (
    <section className="info">
      <div ref={ref} className="infoBody">
        {trail.map(({ x, ...rest }, index) => (
          <animated.span
            className="aboutVerbiage"
            key="aboutVerbiageOneTime"
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            <div>
              In addition to my design work I teach practical web development
              skills through{" "}
              <a
                href="https://www.nucamp.co/"
                target="_blank"
                className="nucamp"
              >
                {" "}
                Nucamp Coding Bootcamp
              </a>
              .
              <br />
              <br />
              If you are interested in using my development services, please,
              feel free to reach out.
            </div>
          </animated.span>
        ))}
        <br />
        <ReachOut />
        <Photogs />
      </div>
    </section>
  );
}
