import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";
import { useEffect, useState } from "react";
import window from "global";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
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

function MobileInfo() {
  const aboutVerbiage1 = [
    "In addition to my design",
    "work I teach practical",
    "web development skills",
    <span>
      through{" "}
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
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const trail = useTrail(aboutVerbiage1.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    delay: 300,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  return (
    <>
      <div ref={ref} className="infoBody">
        {trail.map(({ x, ...rest }, index) => (
          <animated.span
            className={`aboutVerbiage aboutVerbiage--${index}`}
            key={aboutVerbiage1[index]}
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            {aboutVerbiage1[index]}
          </animated.span>
        ))}
      </div>
    </>
  );
}
function DesktopInfo() {
  const aboutVerbiage = [
    "In addition to my design",
    "work I teach practical",
    "web development skills",
    <span>
      through{" "}
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

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const trail = useTrail(aboutVerbiage.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    delay: 300,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  return (
    <>
      <div ref={ref} className="infoBody">
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
    </>
  );
}
export default function Info() {
  const [width, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  const addEventListeners = () => {
    window.addEventListener("resize", handleResize);
  };

  const removeEventListeners = () => {
    window.removeEventListener("resize", handleResize);
  };
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  return (
    <section className="info">
      {width.width > 1090 ? <DesktopInfo /> : <MobileInfo />}
    </section>
  );
}
