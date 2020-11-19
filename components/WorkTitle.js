import { useInView } from "react-intersection-observer";

export default function WorkTitle() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.9,
    triggerOnce: true,
  });
  let style = {
    //   first color is the change to color
    color: inView ? "#1e2018" : "#bbccbf",
    transition: "all 2s ease",
  };

  return (
    <div ref={ref} className="workContainer" style={style}>
      work
    </div>
  );
}
