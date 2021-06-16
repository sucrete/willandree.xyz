import { useTrail, animated } from "react-spring";
import { useEffect, useState } from "react";
import window from "global";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}
function DesktopHeader() {
  var descriptionItems = [
    <span>
      <span className="hola">Hola!</span> My name is Will and I'm a front-end
      developer
    </span>,
    "based in Kansas City. My expertise lies in creating",
    "unique websites using JavaScript-driven",
    "technologies. Possessed of a lifelong love for art",
    "and design, I am keenly drawn to the challenge of",
    "creating singular user-facing experiences...",
  ];

  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 200,
    x: 0,
    height: 44,
    from: { x: 30, height: 0 },
  });
  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          className={`dItem dItem--${index} trails-text`}
          key={descriptionItems[index]}
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <animated.div
            style={{ height }}
            className={`dItemBaby dItemBaby--${index}`}
          >
            {descriptionItems[index]}
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}
function MobileHeader() {
  var descriptionItems = [
    <span>
      <span className="hola">Hola!</span> My name is Will and I'm a
    </span>,
    "front-end developer based in",
    "Kansas City. My expertise lies",
    "in creating unique websites ",
    "using JavaScript-driven ",
    "technologies. Possessed of a",
    "lifelong love for art and",
    "design, I am keenly drawn to",
    "the challenges of creating",
    "singular user-facing",
    "experiences...",
  ];

  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    delay: 200,
    x: 0,
    height: 45,
    from: { x: 15, height: 0 },
  });
  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          className={`dItem dItem--${index} trails-text`}
          key={descriptionItems[index]}
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <animated.div
            style={{ height }}
            className={`dItemBaby dItemBaby--${index}`}
          >
            {descriptionItems[index]}
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}
export default function Header() {
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
    <section className="header">
      <div className="descriptionContainer trails-main">
        <div className="description">
          {width.width > 1090 ? <DesktopHeader /> : <MobileHeader />}
        </div>
      </div>
    </section>
  );
}
