import { useState } from "react";
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
  const [isHidden, setHidden] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });
  const handleToggle = () => {
    setHidden(!isHidden);
  };
  return (
    <div
      ref={ref}
      className={`skillsContainer inView${inView} ${
        isHidden ? "skillsContainer--hidden" : null
      }`}
    >
      <img className="doug" src="/doug.png" />
      <div className="topBar">
        <span onClick={handleToggle} className="circleButton CB1">
          <img src="/close.svg" />
        </span>
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
