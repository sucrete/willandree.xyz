export default function Navigation() {
  return (
    <section className="navigation">
      {/* <svg
        width="160"
        height="160"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="GradientReflect"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.75"
            fy="0.75"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#15146b" />
            <stop offset="70%" stopColor="#dff67b" />
            <stop offset="100%" stopColor="#01011c" />
          </radialGradient>
        </defs>
        <rect
          x="0"
          y="0"
          rx="99"
          ry="73"
          width="150"
          height="150"
          fill="url(#GradientReflect)"
        />
      </svg> */}
      <div className="cover"></div>
      <span className="name">
        <span className="wm">Will </span>
        <span className="lastName">
          <span>An</span>
          <span className="andree dre">dré</span>
          <span className="andree e">e</span>
        </span>
      </span>

      {/* <span className="svgContainer">
        <span className="svgNoise"></span>
        
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
