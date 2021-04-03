import { useTrail, animated } from "react-spring";

export default function Header() {
  const descriptionItems = [
    "Front-end Developer/",
    "Graphic Designer/ UX",
    "Designer/ Student of",
    "Novelty",
  ];

  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2000, friction: 220 },
    opacity: 1,
    delay: 700,
    x: 0,
    height: 110,
    from: { opacity: 0, x: 10, height: 0 },
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
