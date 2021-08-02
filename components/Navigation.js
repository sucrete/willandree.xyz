import { useTrail, animated } from "react-spring";
import window from "global";

const underSixHundo = 650 > window.innerWidth;

const meList = [
  "front-end developer",
  "graphic designer",
  "ux designer",
  "student of novelty",
];

const aboutMeList = meList.map((item, index) => (
  <li key={`liItem--${index}`} className={`liImage liImage--${index}`}>
    {item}
  </li>
));

export default function Navigation() {
  const splitName = ["Wm. ", "Andrée", <span> </span>, <ul>{aboutMeList}</ul>];
  const trail = useTrail(splitName.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: 1,
    x: 10,
    delay: underSixHundo ? 700 : 2000,
    from: { opacity: 0, x: 3 },
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
          </animated.span>
        ))}
      </span>
    </section>
  );
}
