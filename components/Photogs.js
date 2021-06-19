import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";

export default function Photogs() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  return (
    <div ref={ref} className="photogs">
      {trail.map(({ x, ...rest }, index) => (
        <animated.span
          className="photogsBody"
          key="photogsBodyOneTime"
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <ul>
            <li>
              <img src="/me_1.jpeg" />
            </li>
            <li>
              <img src="/me_2.jpeg" />
            </li>
            <li>
              <img src="/me_3.jpeg" />
            </li>
          </ul>
        </animated.span>
      ))}
    </div>
  );
}
