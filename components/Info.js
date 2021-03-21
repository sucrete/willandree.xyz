import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";

const abootVerbiage = [
  "My name is Will Andrée",
  "and I'm a front-end",
  "developer based in Kansas",
  "City. My expertise lies in",
  "creating unique websites",
  "using JavaScript-driven",
  "technologies. As a",
  "devotee of the visual arts,",
  "I am keenly drawn to the",
  "task of producing singular",
  "user-facing experiences.",
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
    threshold: 0.35,
    triggerOnce: true,
  });

  const trail = useTrail(aboutVerbiage.length, {
    config: { mass: 5, tension: 2200, friction: 250 },
    opacity: inView ? 1 : 0,
    delay: 500,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  const trail1 = useTrail(aboutTitle.length, {
    config: { mass: 5, tension: 2200, friction: 250 },
    opacity: inView ? 1 : 0,
    delay: 400,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });

  return (
    <section className="info">
      <div ref={ref} className="infoBody">
        {trail1.map(({ x, ...rest }, index) => (
          <animated.div
            className="aboutHeader title"
            key={aboutTitle[index]}
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            {aboutTitle[index]}
          </animated.div>
        ))}
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
