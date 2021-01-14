import { useTrail, animated } from "react-spring";
export default function Header() {
  const descriptionItems = [
    "front-end developer",
    "graphic designer",
    "hopeless neophile",
  ];
  const l1 = "Front-end developer,";
  const line1 = l1.split("");
  // const werk = descriptionItems.map((item, index) => (
  //   <div className={`descItem${index}`}>{item}</div>
  // ));
  const trail1 = useTrail(line1.length, {
    config: { mass: 3, tension: 5300, friction: 190 },
    opacity: 1,
    x: 0,
    delay: 700,
    from: { opacity: 0, x: 9 },
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
          {/* {trail1.map(({ x, ...rest }, index) => (
            <animated.span
              className={`dItem descriptionItem${index}`}
              key={descriptionItems[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              {descriptionItems[index]}
            </animated.span>
          ))}
          {trail1.map(({ x, ...rest }, index) => (
            <animated.span
              className={`dItem descriptionItem${index}`}
              key={descriptionItems[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              {descriptionItems[index]}
            </animated.span>
          ))} */}
        </div>
      </div>
    </section>
  );
}
