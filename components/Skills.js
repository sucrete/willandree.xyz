import { useInView } from "react-intersection-observer";
const skillsContent = `TECH/SKILLS:

UX Design
JavaScript
React
CSS/SCSS
Graphic Design
Vue
Bootstrap
node
express.js
`;
export default function Skills() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`skillsContainer inView${inView}`}>
      <div className="topBar">
        {" "}
        <span className="circleButton CB1"></span>
        <span className="circleButton CB2"></span>
        <span className="circleButton CB3"></span>
      </div>
      <pre className="preformatted">{skillsContent}</pre>
    </div>
  );
}
