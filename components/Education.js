import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  // EDUCATION HEADER 👇
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    delay: 200,
    from: { opacity: 0, x: 10 },
  });
  const schools = [
    "LaunchCodeKC",
    "Kansas City, MO",
    "Computer Science/Front-End Development",
    "Drury University",
    "Springfield, MO",
    "Art History with an emphasis on the History of Architecture",
    "SCAD",
    "Savannah, GA",
    "Art and Architecture fundamentals",
  ];
  // SCHOOLS 👇
  const trail3 = useTrail(schools.length, {
    config: { mass: 5, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    delay: 300,
    from: { opacity: 0, x: 10 },
  });

  // CONTACT SECTION 👇
  // const trail2 = useTrail(contactInfo.length, {
  //   config: { mass: 6, tension: 2200, friction: 220 },
  //   opacity: inView ? 1 : 0,
  //   x: inView ? 0 : 10,
  //   delay: 900,
  //   from: { opacity: 0, x: 10 },
  // });

  return (
    <div id="contact" className="contact">
      <div ref={ref} className="contentContainer">
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
              education
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

          {/* {trail2.map(({ x, ...rest }, index) => (
            <animated.div
              className={`contactInfo contactInfo--${index}`}
              key={`contact${index}`}
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              {contactInfo[index]}
            </animated.div>
          ))} */}
        </div>
      </div>
    </div>
  );
}