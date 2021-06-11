import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";

function LinkedIn() {
  return (
    <a
      href="https://www.linkedin.com/in/william-andree/"
      target="_blank"
      className="linkedInLink"
    >
      <img src="/linkedin.svg" alt="LinkedIn link image" />
    </a>
  );
}
function MailTo() {
  return (
    <span>
      →{" "}
      <a className="mailTo" href="mailto:will@willandree.xyz">
        will@willandree.xyz
      </a>
    </span>
  );
}
function Resume() {
  return (
    <a className="resume" target="_blank" href="/resume.pdf">
      resumé{" "}
    </a>
  );
}
const aboutVerbiage = [
  "In addition to my design",
  "work I teach practical",
  <span>
    web development skills through{" "}
    <a href="https://www.nucamp.co/" target="_blank" className="nucamp">
      Nucamp Coding Bootcamp.
    </a>
  </span>,
  <br />,
  <a href="https://www.nucamp.co/" target="_blank" className="nucamp"></a>,
  "If you are interested in",
  " using my development",
  "services, please, feel",
  <span>
    free to reach out. <img src="/peace.svg" />
  </span>,
  <MailTo />,
  <Resume />,
  <LinkedIn />,
];

// const aboutTitle = ["about"];
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
  // const trail1 = useTrail(aboutTitle.length, {
  //   config: { mass: 5, tension: 2200, friction: 250 },
  //   opacity: inView ? 1 : 0,
  //   delay: 200,
  //   x: inView ? 0 : 30,
  //   from: { opacity: 0, x: 30 },
  // });

  return (
    <section className="info">
      <div ref={ref} className="infoBody">
        {/* {trail1.map(({ x, ...rest }, index) => (
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
        ))} */}
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
      </div>
    </section>
  );
}
