import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";

const aboutVerbiage = [
  "My name is Will Andrée and I'm a",
  "front-end developer based in",
  "Kansas City. My experience lies",
  "in creating unique websites using",
  "JavaScript-driven technologies.",
  <br />,
  "Possessed of a lifelong love for",
  "art and design, I am keenly drawn",
  "to the challenges of creating",
  "singular user-facing experiences.",
  <br />,
  "On top of my design work, I teach",
  "industry-ready web development",
  "skills through Nucamp Coding",
  "Bootcamp.",
  <br />,
  "If you are interested in using my",
  "development services, please,",
  "feel free to contact me anytime.",
];

const aboutTitle = ["About"];
export default function Info() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const trail = useTrail(aboutVerbiage.length, {
    config: { mass: 5, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    delay: 300,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  const trail1 = useTrail(aboutTitle.length, {
    config: { mass: 5, tension: 2200, friction: 250 },
    opacity: inView ? 1 : 0,
    delay: 200,
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
          <animated.span
            className="aboutVerbiage"
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
