export default function Navigation() {
  return (
    <section className="navigation">
      <span className="name">Wm. Andrée</span>{" "}
      <span className="svgContainer">
        <svg width="75" height="75" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="GradientReflect"
                  cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
                  spreadMethod="pad">
              <stop offset="0%" stop-color="#302e7a"/>
              <stop offset="70%" stop-color="#63631a"/>
              <stop offset="100%" stop-color="#c46221"/>
            </radialGradient>
          </defs>
          <rect x="0" y="0" rx="73" ry="73" width="75" height="75" fill="url(#GradientReflect)"/>
        </svg>
      </span>
      <span className="whereToContainer">
        <a href="#info">info</a>
        <a href="#contact">contact</a>
      </span>
      <svg viewBox="0 0 100 15" class="navLine">
        <path d="M 2 6 C 8 8 13 8 70 8 C 85 8 95 8 97 3" />
      </svg>
    </section>
  );
}
