import { useInView } from "react-intersection-observer";
import { useTrail, animated } from "react-spring";
const skillsContent = `PROFFFICIENCIES:
JavaScript
React
HTML
CSS
SCSS
Vue
Bootstrap
node
express
`;
export default function Skills() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`skillsContainer inView${inView}`}>
      <pre className="preformatted">{skillsContent}</pre>
    </div>
  );
}
