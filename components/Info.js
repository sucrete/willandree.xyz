import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";
const schools = ["LaunchCode - Kansas City, MO", "Computer Science/Front-End Development", "Drury University - Springfield, MO", "Art History, focus on Architectural History", "Savannah College of Art and Design - Savannah, GA", "Art and Architecture Fundamentals"];
export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
              className={`education education--${[index]}`}
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
            About me Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis egestas ipsum nulla, in ultrices metus cursus non. Curabitur
            dapibus ipsum et nulla pulvinar, quis faucibus mauris semper.
          </p>
        </div>
      </div>
    </section>
  );
}
