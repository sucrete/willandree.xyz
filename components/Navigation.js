export default function Navigation() {
  return (
    <section className="navigation">
      <span className="name">Wm. Andrée</span>{" "}
      <span className="whereToContainer">
        {/* <a>work</a>
        <a>info</a>
        <a>contact</a> */}
      </span>
      <svg viewBox="0 0 100 15" class="navLine">
        <path d="M 3 8 Q 3 17 8 8 Q 12 1 15 8 Q 18 15 31 8 Q 39 4 74 8" />
      </svg>
    </section>
  );
}
