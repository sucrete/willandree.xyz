import { useTrail, animated } from "react-spring";
export default function Header() {
  const descriptionItems = [
    "Front-end Developer/",
    "Graphic Designer/",
    "UX Designer/ Student",
    "of Expression..."]
  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    delay: 700,
    from: { opacity: 0, x: 20 },
  });
  return (
    <section className="header">
      <div className="descriptionContainer">
        <div className="description line1Container">
          {trail.map(({ x, ...rest }, index) => (
            <animated.div
              className={`dItem dItem${index}`}
              key={descriptionItems[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
             {descriptionItems[index]}
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}
