import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={`skillsContainer inView${inView}`}>
      <h3>TECH/SKILLS</h3>
      <ul>
        <li>UX Design</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS/SCSS</li>
        <li>Graphic Design</li>
        <li>Vue</li>
        <li>Bootstrap</li>
        <li>node</li>
        <li>express.js</li>
      </ul>
    </div>
  );
}
