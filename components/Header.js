import { useTrail, animated } from "react-spring";

export default function Header() {
  const descriptionItems = [
    "Hola. My name is Will. I'm a front-end developer",
    "based in Kansas City. My expertise lies in creating",
    "unique websites using JavaScript-driven",
    "technologies. Possessed of a lifelong love for art",
    "and design, I am keenly drawn to the challenges of",
    "creating singular user-facing experiences.",
  ];

  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    delay: 200,
    x: 0,
    height: 44,
    from: { x: 40, height: 0 },
  });

  return (
    <section className="header">
      <div className="descriptionContainer trails-main">
        <div className="description line1Container">
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
        </div>
      </div>
    </section>
  );
}
