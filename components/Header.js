import { useTrail, animated } from "react-spring";

export default function Header() {
  const descriptionItems = [
    "Front-end Developer,",
    "Graphic Designer, UX",
    "Designer, Student of",
    "Novelty",
  ];
  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: 1,
    x: 0,
    height: 100,
    delay: 700,
    rotate: 0,
    from: { opacity: 0, x: 20, height: 0, rotate: 3 },
  });
  return (
    <section className="header">
      <div className="descriptionContainer trails-main">
        <div className="description line1Container">
          {trail.map(({ x, rotate, height, ...rest }, index) => (
            <animated.div
              className={`dItem dItem--${index} trails-text`}
              key={descriptionItems[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div
                style={{
                  height,
                  transform: rotate.interpolate(
                    (rotate) => `rotate(${rotate}deg)`
                  ),
                }}
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
