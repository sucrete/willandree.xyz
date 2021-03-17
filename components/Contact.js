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

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  // GRID 👇
  const trail1 = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 360 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });

  // EDUCATION HEADER 👇
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    delay: 200,
    from: { opacity: 0, x: 10 },
  });

  // SCHOOLS 👇
  const trail3 = useTrail(schools.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    delay: 300,
    from: { opacity: 0, x: 10 },
  });

  // CONTACT HEADER 👇
  const trail2 = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    delay: 500,
    from: { opacity: 0, x: 10 },
  });

  return (
    <section id="contact" className="contact">
      <div className="contentContainer">
        <div className="copyContainer">
          {trail.map(({ x, ...rest }, index) => (
            <animated.div
              className="educationHeader title"
              key="education"
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              Education
            </animated.div>
          ))}
          {trail3.map(({ x, ...rest }, index) => (
            <animated.div
              className={`educationItem educationItem--${index}`}
              key={schools[index]}
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              {schools[index]}
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
              className="contactHeader title"
              key="contact"
              ref={ref}
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
