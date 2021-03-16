import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

const slides = [
  { id: 0, url: "/dumpTRUCKlogo.svg" },
  { id: 1, url: "/thistle.png" },
  { id: 2, url: "/5532_DuckWaddle.gif" },
];

export default function DumpTRUCK() {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 3), 7000),
    []
  );
  return (
    <>
      <div className="projectDesignation">i</div>
      <div className="modalBody">
        <h1 className="modalHeader">dumpTRUCK</h1>
        <div className="modalContent">
          <div className="modalImagesContainer">
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} class="modalImage" style={{ ...props }}>
                <img src={`${item.url}`} />
              </animated.div>
            ))}
          </div>
          <div className="modalDetails"></div>
        </div>
      </div>
    </>
  );
}
