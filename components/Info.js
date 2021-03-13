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
const abootVerbiage = [
  "About My name is Will",
  "Andrée and I'm a",
  "front-end developer",
  "based in Kansas City.",
  "My expertise lies in",
  "creating unique",
  "websites on the",
  "industry's fastest",
  "tech. I am an",
  "enthusiast of design,",
  "drawn to the hard",
  "task of creating truly",
  "novel user",
  "experiences.",
];
const aboutVerbiage = [];
function unpickVerbiage() {
  abootVerbiage.forEach((string) => {
    let bot = string.split(" ");
    aboutVerbiage.push(bot);
  });
}
unpickVerbiage();
const aboutTitle = ["About"];
export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });

  const trail = useTrail(aboutVerbiage.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: inView ? 1 : 0,
    delay: 500,
    x: inView ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });
  const trail1 = useTrail(aboutTitle.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: inView ? 1 : 0,
    delay: 400,
    x: inView ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });
  return (
    <section className="info">
      <div ref={ref} className="infoBody">
        {/* {trail1.map(({ x, ...rest }, index) => (
          <animated.div
            className="aboutHeader"
            key={aboutTitle[index]}
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            {aboutTitle[index]}
          </animated.div>
        ))} */}
        {trail.map(({ x, ...rest }, index) => (
          <animated.div
            className="aboutVerbiage"
            key={aboutVerbiage[index]}
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            {aboutVerbiage[index].map((value, index) => (
              <span key={index}>{value}</span>
            ))}
          </animated.div>
        ))}
        {/* My name is Will Andrée and I'm a front-end developer based in Kansas
        City. My expertise lies in sculpting unique websites on the industry's
        fastest tech. I am an enthusiast of design, drawn to the hard task of
        creating truly novel user experiences. */}
      </div>
    </section>
  );
}
