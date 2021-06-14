import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { useEffect, useState } from "react";
import window from "global";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function Box1() {
  return (
    <div className="designers">
      <div>favorite designers:</div>
      <ul>
        <li>
          <a className="designer1" target="_blank" href="https://www.tmthyl.uk">
            Timothy Luke
          </a>
        </li>
        <li>
          <a
            className="designer2"
            target="_blank"
            href="https://www.instagram.com/trvsbrthrs/"
          >
            Travis Brothers
          </a>
        </li>
        <li>
          <a
            className="designer3"
            target="_blank"
            href="http://www.thibaudallie.com/"
          >
            Thibaud Allie
          </a>
        </li>
      </ul>
    </div>
  );
}
function Box2() {
  return (
    <div className="fonts">
      <div>favorite fonts rn:</div>
      <img src="/editorialnew.svg" alt="editorial new font svg" />
      <img src="/rightgrotesk.svg" alt="right grotesk font svg" />
      <img src="/mincho.svg" alt="mincho font svg" />
    </div>
  );
}
function Box3() {
  return (
    <div className="skills">
      <div>tech/skills:</div>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>UX Design</li>
        <li>HTML/CSS</li>
        <li>SCSS</li>
        <li>Graphic Design</li>
        <li>Illustrator</li>
        <li>Photoshop</li>
        <li>Wordpress</li>
        <li>Vue</li>
        <li>Node</li>
      </ul>
    </div>
  );
}
const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [width, setWindowDimensions] = useState(getWindowDimensions());
  if (typeof navigator !== "undefined" && isMobile() && width > 1090)
    return null;

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    var designer1 = document.getElementsByClassName("designer1")[0];
    designer1.addEventListener("mouseenter", onMouseEnter);
    designer1.addEventListener("mouseleave", onMouseLeave);
    var designer2 = document.getElementsByClassName("designer2")[0];
    designer2.addEventListener("mouseenter", onMouseEnter);
    designer2.addEventListener("mouseleave", onMouseLeave);
    var designer3 = document.getElementsByClassName("designer3")[0];
    designer3.addEventListener("mouseenter", onMouseEnter);
    designer3.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", handleResize);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    var designer1 = document.getElementsByClassName("designer1")[0];
    designer1.removeEventListener("mouseenter", onMouseEnter);
    designer1.removeEventListener("mouseleave", onMouseLeave);
    var designer2 = document.getElementsByClassName("designer2")[0];
    designer2.removeEventListener("mouseenter", onMouseEnter);
    designer2.removeEventListener("mouseleave", onMouseLeave);
    var designer3 = document.getElementsByClassName("designer3")[0];
    designer3.removeEventListener("mouseenter", onMouseEnter);
    designer3.removeEventListener("mouseleave", onMouseLeave);
    window.removeEventListener("resize", handleResize);
  };
  const onMouseLeave = () => {
    setHidden(true);
  };
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
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
      src="/stars.svg"
      className={cursorClasses}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
export default function Favorites() {
  const boxes = [<Box1 />, <Box2 />];
  const oneBox = [<Box3 />];
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const trail = useTrail(boxes.length, {
    config: { mass: 5, tension: 1600, friction: 300 },
    opacity: inView ? 1 : 0,
    delay: 100,
    x: inView ? 0 : 40,
    from: { opacity: 0, x: 40 },
  });
  const trail2 = useTrail(oneBox.length, {
    config: { mass: 5, tension: 1600, friction: 300 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 40,
    from: { opacity: 0, x: 40 },
  });
  return (
    <section ref={ref} className="favorites">
      <Cursor />
      <div className="favoritesContainer">
        {trail2.map(({ x, ...rest }, index) => (
          <animated.div
            className="boxColumn"
            key={`boxColumn${index}`}
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            {oneBox[index]}
          </animated.div>
        ))}
        <div className="leftContainer">
          {trail.map(({ x, ...rest }, index) => (
            <animated.div
              className={`boxItem boxItem--${index}`}
              key={`boxItem${index}`}
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              {boxes[index]}
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}
