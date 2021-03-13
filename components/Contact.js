import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
const schools = [
  "LaunchCodeKC",
  "Kansas City, MO",
  "Computer Science/Front-End Development",
  "Drury University",
  "Springfield, MO",
  "Art History, emphasis on Architectural History",
  "Savannah College of Art and Design",
  "Savannah, GA",
  "Art and Architecture fundamentals",
];
const education = ["Education"];
export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.65,
    triggerOnce: true,
  });
  const trail = useTrail(education.length, {
    config: { mass: 5, tension: 2200, friction: 250 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  const trail1 = useTrail(education.length, {
    config: { mass: 5, tension: 2200, friction: 250 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  const trail2 = useTrail(education.length, {
    config: { mass: 5, tension: 2200, friction: 250 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  return (
    <section ref={ref} id="contact" className="contact">
      <div className="contentContainer">
        <div className="copyContainer">
          {trail.map(({ x, ...rest }, index) => (
            <animated.div
              className="educationHeader"
              key={education[index]}
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              Education
            </animated.div>
          ))}
          {trail1.map(({ x, ...rest }, index) => (
            <animated.div
              className="grid"
              key="grid"
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              <img src="/grid.svg" alt="background svg image" />
            </animated.div>
          ))}
          {trail2.map(({ x, ...rest }, index) => (
            <animated.div
              className="contactHeader"
              key="contact"
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              Contact
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}
