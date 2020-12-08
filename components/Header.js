import { useTrail, animated } from "react-spring";
export default function Header() {
  const descriptionItems = [
    "front-end developer",
    "graphic designer",
    "hopeless neophile",
  ];
  // const werk = descriptionItems.map((item, index) => (
  //   <div className={`descItem${index}`}>{item}</div>
  // ));
  const trail = useTrail(descriptionItems.length, {
    config: { mass: 7, tension: 1300, friction: 205 },
    opacity: 1,
    x: 0,
    delay: 2000,
    from: { opacity: 0, x: 40 },
  });
  return (
    <section className="header">
      <div className="descriptionContainer">
        {/* <div className="iAmContainer rotate-wrap">
          <div class="box box-rotate box-rotate-gyro">
            <h1>i am</h1>
          </div>
        </div> */}
        <p className="description">
          {trail.map(({ x, ...rest }, index) => (
            <animated.span
              className={`dItem descriptionItem${index}`}
              key={descriptionItems[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                cursor: "pointer",
              }}
            >
              {descriptionItems[index]}
            </animated.span>
          ))}
        </p>
      </div>
    </section>
  );
}
