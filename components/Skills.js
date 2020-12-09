import { useInView } from "react-intersection-observer";
const skillsContent = `betelgeuses-computer:willandree.xyz betelgeus
e$ node printSkillz.js`;
const skillsContentMiddle = `
TECH/SKILLS:

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
const skillsContentBottom = `
betelgeuses-computer:willandree.xyz betelgeus
e$ `;
export default function Skills() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`skillsContainer inView${inView}`}>
      <div className="topBar">
        <span className="circleButton CB1"></span>
        <span className="circleButton CB2"></span>
        <span className="circleButton CB3"></span>

        <span className="midSpan">
          <img src="/macfolder.png" />
          willandree.xyz — ‒bash — 45x16
        </span>
      </div>
      <div className="preContainer">
        <pre className="preformatted">{skillsContent}</pre>
        <pre className="preformatted2">{skillsContentMiddle}</pre>
        <pre className="preformatted3">
          {skillsContentBottom}
          <span> </span>
        </pre>
      </div>
    </div>
  );
}
