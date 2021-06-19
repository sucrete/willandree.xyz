import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  // EDUCATION HEADER 👇
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 30,
    delay: 200,
    from: { opacity: 0, x: 30 },
  });

  return (
    <div ref={ref} className="education">
      {trail.map(({ x, ...rest }, index) => (
        <animated.div
          className="educationContainer"
          key="education"
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <div className="educationHeader title">education</div>
          <div className="schoolsBody">
            <div className="schoolTitle">LaunchCodeKC</div>
            <div>Kansas City, MO</div>
            <div>Computer Science/Front-End Development</div>
            <br />
            <div className="schoolTitle">Drury University</div>
            <div>Springfield, MO</div>
            <div>
              Art History with an emphasis on the History of Architecture
            </div>
            <br />
            <div className="schoolTitle">SCAD</div>
            <div>Savannah, GA</div>
            <div>Art and Architecture fundamentals</div>
          </div>
        </animated.div>
      ))}
    </div>
  );
}
