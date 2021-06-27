import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import window from "global";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}
function MobileEducation() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 500 },
    opacity: inView ? 1 : 0,
    delay: 0,
    x: inView ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });
 return (
<>{trail.map(({ x, ...rest }, index) => (
        <animated.div
          className="educationContainer"
          key="education"
          ref={ref}
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <div className="educationHeader title">education</div>
          <div className="schoolsBody">
            <div className="schoolTitle">LaunchCodeKC</div>
            <div>Kansas City, MO</div>
            <div>Computer Science/Front-End Development</div>
            <br />
            <div className="schoolTitle">Drury University</div>
            <div>Springfield, MO</div>
            <div>
              Art History with an emphasis on the History of Architecture
            </div>
            <br />
            <div className="schoolTitle">SCAD</div>
            <div>Savannah, GA</div>
            <div>Art and Architecture fundamentals</div>
          </div>
        </animated.div>
      ))}</>
 )
}
function DesktopEducation() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 500 },
    opacity: inView ? 1 : 0,
    delay: 700,
    x: inView ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });
 return (
<>{trail.map(({ x, ...rest }, index) => (
        <animated.div
          className="educationContainer"
          key="education"
          ref={ref}
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <div className="educationHeader title">education</div>
          <div className="schoolsBody">
            <div className="schoolTitle">LaunchCodeKC</div>
            <div>Kansas City, MO</div>
            <div>Computer Science/Front-End Development</div>
            <br />
            <div className="schoolTitle">Drury University</div>
            <div>Springfield, MO</div>
            <div>
              Art History with an emphasis on the History of Architecture
            </div>
            <br />
            <div className="schoolTitle">SCAD</div>
            <div>Savannah, GA</div>
            <div>Art and Architecture fundamentals</div>
          </div>
        </animated.div>
      ))}</>
 )
}
export default function Education() {
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
    <div className="education">
      {width < 1090 ? <MobileEducation/> : <DesktopEducation/>}
    </div>
  );
}
