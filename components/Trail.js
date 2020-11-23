import React, { useState, useRef } from "react";
import { useTrail, animated } from "react-spring";

const items = ["Lorem", "ipsum", "dolor", "sit"];
const work = [
  "dumpTRUCK",
  "maxrosen.town",
  "Old Town Lofts",
  "calvintodd.com",
  "The Voter's Companion",
  "willandree.xyz",
];
export default function Trail() {
  const [toggle, set] = useState(true);
  const trail = useTrail(work.length, {
    // items,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    config: { mass: 5, tension: 2000, friction: 200 },
    reverse: !toggle,
  });

  return (
    <div className="trails-main" onClick={() => set((state) => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.a
            className="trails-box"
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.span style={{ height }}>{work[index]}</animated.span>
          </animated.a>
        ))}
      </div>
    </div>
  );
}
