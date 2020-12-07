import { useInView } from "react-intersection-observer";
const skillsContent = `TECH/PROFICIENCIES:

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
