import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import window from "global";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}
function EducationComponent() {
return (
  <>
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
          </>
);

}
function MobileEducation(props) {
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 500 },
    opacity: props.dudeYouInView ? 1 : 0,
    delay: 0,
    x: props.dudeYouInView ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });
 return (
<>{trail.map(({ x, ...rest }, index) => (
        <animated.div
          className="educationContainer"
          key="education"
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <EducationComponent/>
        </animated.div>
      ))}</>
 )
}
function DesktopEducation(props) {
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2200, friction: 500 },
    opacity: props.youInView ? 1 : 0,
    delay: 700,
    x: props.youInView ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });
 return (
<>{trail.map(({ x, ...rest }, index) => (
        <animated.div
          className="educationContainer"
          key="education"
          style={{
            ...rest,
            top: x.interpolate((x) => `${x}px`),
          }}
        >
          <EducationComponent/>
        </animated.div>
      ))}</>
 )
}
export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
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
    <div ref={ref} className="education">
      {width < 1090 ? <MobileEducation dudeYouInView={inView}/> : <DesktopEducation youInView={inView}/>}
    </div>
  );
}
