import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
export default function Resume() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 240 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });

  return (
    <section ref={ref} className="resume">
      {trail.map(({ x, ...rest }, index) => (
        <animated.a
          href=""
          className="resumePill"
          target="_blank"
          key="resume"
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          resumé <img src="/pdf.svg" alt="new window pdf resume" />
        </animated.a>
      ))}
    </section>
  );
}
