import { useTrail, animated } from "react-spring";
export default function Navigation() {
  const fullName = "Will Andrée";
  const splitName = fullName.split(" ");
  const trail = useTrail(splitName.length, {
    config: { mass: 4, tension: 2200, friction: 250 },
    opacity: 1,
    x: 0,
    delay: 700,
    from: { opacity: 0, x: -20 },
  });
  return (
    <section className="navigation">
      <span className="name">
        {trail.map(({ x, ...rest }, index) => (
          <animated.span
            className={`nameItem nameItem--${index}`}
            key={splitName[index]}
            style={{
              ...rest,
              top: x.interpolate((x) => `${x}px`),
            }}
          >
            {splitName[index]}
            <span> </span>
          </animated.span>
        ))}
      </span>
      <span className="cone"></span>
    </section>
  );
}
