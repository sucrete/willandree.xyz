import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
function Box1() {
  return (
    <div className="designers">
      <div>favorite designers rn:</div>
    </div>
  );
}
function Box2() {
  return (
    <div className="colors">
      <div>favorite fonts atm:</div>
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
        <li>Node</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default function Favorites() {
  const boxes = [<Box1 />, <Box2 />];
  const oneBox = [<Box3 />];
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const trail = useTrail(boxes.length, {
    config: { mass: 5, tension: 2200, friction: 270 },
    opacity: inView ? 1 : 0,
    delay: 500,
    x: inView ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });
  const trail2 = useTrail(oneBox.length, {
    config: { mass: 5, tension: 2200, friction: 270 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });
  return (
    <section ref={ref} className="favorites">
      <div className="favoritesContainer">
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
      </div>
    </section>
  );
}
