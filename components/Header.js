import { useEffect } from "react";
import { useTrail, animated } from "react-spring";

export default function Header() {
  const descriptionItems = [
    "Front-end Developer,",
    "Graphic Designer, UX",
    "Designer, Student of",
    "Novelty",
  ];

  const arrayOfItems = [];

  const splitMe = (_2array) => {
    let thing2split = _2array.split("");
    let splitArray = [];
    thing2split.forEach((letter) => {
      splitArray.push(`<span>${letter}</span>`);
    });
    return splitArray;
  };

  descriptionItems.forEach((descItem) => {
    arrayOfItems.push(splitMe(descItem));
  });

  useEffect(() => {
    const dItemBaby0 = document.getElementsByClassName("dItemBaby--0")[0];
    const dItemBaby1 = document.getElementsByClassName("dItemBaby--1")[0];
    const dItemBaby2 = document.getElementsByClassName("dItemBaby--2")[0];
    const dItemBaby3 = document.getElementsByClassName("dItemBaby--3")[0];
    const swapBabies = (baby, which) => {
      baby.innerHTML = "";
      arrayOfItems[which].forEach((eachSpan) => {
        baby.innerHTML += eachSpan;
      });
    };
    // const timer = setTimeout(() => {
    //   console.log("This will run after 2.5 seconds!");
    //   swapBabies(dItemBaby0, 0);
    //   swapBabies(dItemBaby1, 1);
    //   swapBabies(dItemBaby2, 2);
    //   swapBabies(dItemBaby3, 3);
    // }, 2500);
    // return () => clearTimeout(timer);
  });
  const trail = useTrail(descriptionItems.length, {
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: 1,
    x: 0,
    height: 100,
    delay: 700,
    rotate: 0,
    from: { opacity: 0, x: 20, height: 0, rotate: 1.5 },
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
                className={`dItemBaby dItemBaby--${index}`}
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
