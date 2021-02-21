import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";
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
export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const trail = useTrail(schools.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: inView ? 1 : 0,
    delay: 400,
    x: inView ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });

  return (
    <section id="info" className="info">
      <span className={`title inView${inView}Title`}>Info</span>
      <div className="infoBody">
        <div className={`education inView${inView}`}>
          <div className="educationHeader">Education</div>
          <div className="educationBody">
            {trail.map(({ x, ...rest }, index) => (
              <animated.div
                className={`educationItem educationItem--${index}`}
                key={schools[index]}
                style={{
                  ...rest,
                  transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                }}
              >
                {schools[index]}
              </animated.div>
            ))}
          </div>
        </div>
        <div className={`aboutMe inView${inView}AboutMe inView${inView}`}>
          {" "}
          <p ref={ref}>
            <span className="aboutMeSpan"></span>Hi there. My name is William
            Andrée and I'm a web developer based in Kansas City. As a compulsive
            aggregator of images, color combinations, fonts, and unique modes of
            expression, I'm invariably drawn to user-facing design. Experienced
            on the MERN stack.
          </p>
        </div>
      </div>
    </section>
  );
}
