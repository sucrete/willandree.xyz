import { useTrail, animated } from "react-spring";
export default function Header() {
  const descriptionItems = [
    "front-end developer",
    "graphic designer",
    "hopeless neophile",
  ];
  const l1 = "Front-end Developer,";
  const l2 = "Graphic Designer,";
  const l3 = "& Hopeless Neophile";
  const line1 = l1.split("");
  const line2 = l2.split("");
  const line3 = l3.split("");
  const trail1 = useTrail(line1.length, {
    config: { mass: 2, tension: 5300, friction: 200 },
    opacity: 1,
    x: 0,
    delay: 700,
    from: { opacity: 0, x: 5 },
  });
  const trail2 = useTrail(line2.length, {
    config: { mass: 2, tension: 5300, friction: 200 },
    opacity: 1,
    x: 0,
    delay: 850,
    from: { opacity: 0, x: 5 },
  });
  const trail3 = useTrail(line3.length, {
    config: { mass: 2, tension: 5300, friction: 200 },
    opacity: 1,
    x: 0,
    delay: 1000,
    from: { opacity: 0, x: 5 },
  });
  return (
    <section className="header">
      <div className="descriptionContainer">
        {/* <div className="iAmContainer rotate-wrap">
          <div class="box box-rotate box-rotate-gyro">
            <h1>i am</h1>
          </div>
        </div> */}
        <div className="description line1Container">
          {trail1.map(({ x, ...rest }, index) => (
            <animated.span
              className={`dItem descriptionItem${index}`}
              key={line1[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              {line1[index]}
            </animated.span>
          ))}
        </div>
        <div className="description line2Container">
          {trail2.map(({ x, ...rest }, index) => (
            <animated.span
              className={`dItem descriptionItem${index}`}
              key={line2[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              {line2[index]}
            </animated.span>
          ))}
        </div>
        <div className="description line3Container">
          {trail3.map(({ x, ...rest }, index) => (
            <animated.span
              className={`dItem descriptionItem${index}`}
              key={line3[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              {line3[index]}
            </animated.span>
          ))}
        </div>
      </div>
    </section>
  );
}
