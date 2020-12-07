import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";
const skillsContent = `SKILLSET:

JavaScript
React
Graphic Design
CSS/SCSS
Vue
Bootstrap
node
express
`;
export default function Skills() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`skillsContainer inView${inView}`}>
      <div className="topBar"></div>
      <pre className="preformatted">{skillsContent}</pre>
    </div>
  );
}
