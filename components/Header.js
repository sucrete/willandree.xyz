import { useTrail, animated } from "react-spring";
import { DistortionText } from "react-text-fun";
function DistText() {
  return (
    <DistortionText
      id="distortion"
      fontSize={72}
      noiseAmplitude={0.05}
      distortX={0.9}
      fill="#dfff7c"
      fontFamily="Epilogue"
      text="Novelty"
    />
  );
}
export default function Header() {
  const descriptionItems = [
    "Front-end Developer/",
    "Graphic Designer/ UX",
    "Designer/ Student of",
    <DistText />,
  ];

  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2200, friction: 250 },
    opacity: 1,
    delay: 700,
    x: 0,
    from: { opacity: 0, x: 50 },
  });

  return (
    <section className="header">
      <div className="descriptionContainer trails-main">
        <div className="description line1Container">
          {trail.map(({ x, ...rest }, index) => (
            <animated.div
              className={`dItem dItem--${index} trails-text`}
              key={descriptionItems[index]}
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              <animated.div className={`dItemBaby dItemBaby--${index}`}>
                {descriptionItems[index]}
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}
