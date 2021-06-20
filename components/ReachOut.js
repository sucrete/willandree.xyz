import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";

export default function ReachOut() {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  return (
    <div ref={ref} className="reachOut">
      {trail.map(({ x, ...rest }, index) => (
        <animated.span
          className="reachOutBody"
          key="reachOutBodyOneTime"
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <a
            href="https://www.linkedin.com/in/william-andree/"
            target="_blank"
            className="linkedInLink"
          >
            LinkedIn <span className="linkArrow">→</span>
          </a>

          <a className="mailTo" href="mailto:will@willandree.xyz">
            will@willandree.xyz <span className="linkArrow">→</span>
          </a>
          <a className="resume" target="_blank" href="/resume.pdf">
            Resumé<span className="linkArrow">→</span>
          </a>
        </animated.span>
      ))}
    </div>
  );
}
