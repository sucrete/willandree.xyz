import React, { useEffect } from "react";
import { useTrail, a } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Trail({ open, children, ...props }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    skip: false,
  });
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1800, friction: 230 },
    opacity: 1,
    x: 0,
    delay: inView ? 0 : 50000,
    from: { opacity: 0, x: 150 },
  });

  return (
    <div className="trails-main" {...props}>
      <div className="refDiv" ref={ref}>
        {inView &&
          trail.map(({ x, ...rest }, index) => (
            <a.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <a.div>{items[index]}</a.div>
            </a.div>
          ))}
      </div>
    </div>
  );
}
