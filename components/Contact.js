import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import classNames from "classnames";

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

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
function MailTo() {
  return (
    <a className="mailTo" href="mailto:will@willandree.xyz">
      will@willandree.xyz
    </a>
  );
}

function Cursor() {
  if (typeof navigator !== "undefined" && isMobile()) return null;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    var emailLink = document.getElementsByClassName("mailTo")[0];
    emailLink.addEventListener("mouseenter", onMouseEnter);
    emailLink.addEventListener("mouseleave", onMouseLeave);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    var emailLink = document.getElementsByClassName("mailTo")[0];
    emailLink.removeEventListener("mouseenter", onMouseEnter);
    emailLink.removeEventListener("mouseleave", onMouseLeave);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };
  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const cursorClasses = classNames("cursor", {
    "cursor--hidden": hidden,
  });

  return (
    <img
      src="/mailto.svg"
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

const contactInfo = ["Contact", <MailTo />];
export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
    config: { mass: 5, tension: 2200, friction: 220 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    delay: 900,
    from: { opacity: 0, x: 10 },
  });

  return (
    <section id="contact" className="contact">
      <Cursor />
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
        </div>
      </div>
    </section>
  );
}
