import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";

const aboutVerbiage = [
  "My name is Will Andrée and I'm a",
  "front-end developer based in",
  "Kansas City. My expertise lies in",
  "creating unique websites using",
  "JavaScript-driven technologies.",
  <br />,
  "Possessed of a lifelong love for",
  "art and design, I am keenly drawn",
  "to the challenges of creating",
  "singular user-facing experiences.",
  <br />,
  "In addition to my design work, I",
  "teach practical web development",
  <span>
    skills through{" "}
    <a href="https://www.nucamp.co/" target="_blank" className="nucamp">
      Nucamp Coding Bootcamp.
    </a>
  </span>,
  <a href="https://www.nucamp.co/" target="_blank" className="nucamp"></a>,
  <br />,
  "If you are interested in using my",
  "development services, please,",
  "feel free to reach out.",
];

const aboutTitle = ["About"];
export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const trail = useTrail(aboutVerbiage.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    delay: 300,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  const trail1 = useTrail(aboutTitle.length, {
    config: { mass: 5, tension: 2200, friction: 250 },
    opacity: inView ? 1 : 0,
    delay: 200,
    x: inView ? 0 : 30,
    from: { opacity: 0, x: 30 },
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
          <animated.span
            className={`aboutVerbiage aboutVerbiage--${index}`}
            key={aboutVerbiage[index]}
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            {aboutVerbiage[index]}
          </animated.span>
        ))}
        {/* My name is Will Andrée and I'm a front-end developer based in Kansas
        City. My expertise lies in sculpting unique websites on the industry's
        fastest tech. I am an enthusiast of design, drawn to the hard task of
        creating truly novel user experiences. */}
      </div>
    </section>
  );
}
