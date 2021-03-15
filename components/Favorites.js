import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
function Box1() {
  return (
    <div className="designers">
      <div>favorite designers rn:</div>
      <ul>
        <li>
          <a target="_blank" href="https://www.tmthyl.uk">
            Timothy Luke
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/trvsbrthrs/">
            Travis Brothers
          </a>
        </li>
        <li>
          <a target="_blank" href="http://www.thibaudallie.com/">
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
      <div>favorite fonts atm:</div>
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

export default function Favorites() {
  const boxes = [<Box1 />, <Box2 />];
  const oneBox = [<Box3 />];
  const { ref, inView } = useInView({
    threshold: 0.55,
    triggerOnce: true,
  });
  const trail = useTrail(boxes.length, {
    config: { mass: 5, tension: 2200, friction: 330 },
    opacity: inView ? 1 : 0,
    delay: 100,
    x: inView ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });
  const trail2 = useTrail(oneBox.length, {
    config: { mass: 5, tension: 2200, friction: 330 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    from: { opacity: 0, x: 20 },
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
