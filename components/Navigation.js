import { useEffect } from "react";
export default function Navigation() {
  useEffect(() => {
    var boxBox = document.getElementsByClassName("boxBox")[0];
    var boxBoxH = boxBox.clientHeight;
    var boxBoxW = boxBox.clientWidth;
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    function getRandomSize(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    function freshDot(phatObj, height, width, padding) {
      let newObj = document.createElement("div");
      newObj = document.createElement("div");
      newObj.classList.add("gox");
      newObj.style.top = getRandomInt(padding, height - padding) + "px";
      newObj.style.left = getRandomInt(padding, width - padding) + "px";
      newObj.size = getRandomSize(2);
      newObj.style.height = newObj.size + "px";
      newObj.style.width = newObj.size + "px";
      phatObj.appendChild(newObj);
    }
    for (var z = 0; z < 3000; z++) {
      freshDot(boxBox, boxBoxH, boxBoxW, 3);
    }
    for (var p = 0; p < 10000; p++) {
      freshDot(boxBox, boxBoxH, boxBoxW, 7);
    }
    for (var i = 0; i < 25000; i++) {
      freshDot(boxBox, boxBoxH, boxBoxW, 11);
    }
  });
  return (
    <section className="navigation">
      <span className="wmContainer">
        <div className="wm">Wm.</div>
        <div className="conicalGradientTop boxBox"></div>
      </span>
      <span className="andree">
        <span>And</span>
        <span className="re">ré</span>
        <span className="e">e</span>
      </span>
      {/* <span className="svgContainer">
        <span className="svgNoise"></span>
        <svg width="65" height="65" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="GradientReflect"
                  cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
                  spreadMethod="reflect">
              <stop offset="0%" stopColor="#15146b"/>
              <stop offset="70%" stopColor="#01011c"/>
              <stop offset="100%" stopColor="#2b1f14"/>
            </radialGradient>
          </defs>
          <rect x="0" y="0" rx="73" ry="73" width="65" height="65" fill="url(#GradientReflect)"/>
        </svg>
      </span>
      <span className="whereToContainer">
        <a href="#info">info</a>
        <a href="#contact">contact</a>
      </span>
      <svg viewBox="0 0 100 15" className="navLine">
        <path d="M 2 6 C 8 8 13 8 70 8 C 85 8 95 8 97 3" />
      </svg> */}
    </section>
  );
}
