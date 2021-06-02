import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const schools = [
  "LaunchCodeKC",
  "Kansas City, MO",
  "Computer Science/Front-End Development",
  "Drury University",
  "Springfield, MO",
  "Art History, emphasis on History of Architecture",
  "SCAD",
  "Savannah, GA",
  "Art and Architecture fundamentals",
];
function MailTo() {
  return (
    <a className="mailTo" href="mailto:will@willandree.xyz">
      will@willandree.xyz
    </a>
  );
}
function Resume() {
  return <a className="resume">resumé </a>;
}
const contactInfo = ["Contact", <MailTo />, <Resume />];
export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 1,
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

  // SCHOOLS 👇
  const trail3 = useTrail(schools.length, {
    config: { mass: 5, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    delay: 300,
    from: { opacity: 0, x: 10 },
  });

  // CONTACT SECTION 👇
  const trail2 = useTrail(contactInfo.length, {
    config: { mass: 6, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    delay: 900,
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
          <div ref={ref} className="anchor"></div>
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
          {trail2.map(({ x, ...rest }, index) => (
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
          ))}
          <div className="linksContainer">
            <a
              href="https://www.linkedin.com/in/william-andree/"
              target="_blank"
              className="linkedInLink"
            >
              <img src="/linkedin.svg" alt="LinkedIn link image" />
            </a>
            <a href="https://codepen.io/sucrete" className="codepenLink">
              <img src="/3d-outlined-shape.svg" alt="Codepen link image" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
