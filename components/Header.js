import { useTrail, animated } from "react-spring";
import { DistortionText } from "react-text-fun";

export default function Header() {
  const descriptionItems = [
    "Front-end Developer,",
    "Graphic Designer, UX",
    "Designer, Student of",
  ];

  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: 1,
    delay: 500,
    from: { opacity: 0 },
  });

  return (
    <section className="header">
      <div className="descriptionContainer trails-main">
        <div className="description line1Container">
          {trail.map(({ ...rest }, index) => (
            <animated.div
              className={`dItem dItem--${index} trails-text`}
              key={descriptionItems[index]}
              style={{
                ...rest,
              }}
            >
              <animated.div className={`dItemBaby dItemBaby--${index}`}>
                {descriptionItems[index]}
              </animated.div>
            </animated.div>
          ))}
          <DistortionText
            id="distortion"
            fontSize={73}
            fill="#dfff7c"
            fontFamily="Epilogue"
            text="Novelty"
          />
        </div>
      </div>
      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <filter id="filter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0"
            id="turbulence"
            numOctaves="1"
            result="turbulence"
            seed="5"
          >
            <animate
              id="noiseAnimate"
              attributeName="baseFrequency"
              values="0.02; 0.04; 0.02"
              calcMode="spline"
              keySplines="0.42 0.0 0.58 1.0;0.42 0.0 0.58 1.0"
              dur="15s"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="B"
          ></feDisplacementMap>
        </filter>
      </svg>
      <svg>
        <filter id="wavy">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.005"
            numOctaves="5"
          ></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="50"></feDisplacementMap>
        </filter>
      </svg>
    </section>
  );
}
