import { useEffect } from "react";
const skillsContent = `TECH PROFFFICIENCIES:
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
  useEffect(() => {
    const preformatted = document.getElementsByClassName("preformatted")[0];
    const newSkills = skillsContent.split("");
    let accumulator = ``;
    newSkills.forEach((bug) => {
      setTimeout(function () {
        accumulator += bug;
        preformatted.innerHTML = accumulator;
      }, 500);
    });
  });
  return (
    <div className="skillsContainer">
      <pre className="preformatted"></pre>
    </div>
  );
}
