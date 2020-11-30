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
        <path d="M 2 6 C 8 8 13 8 70 8 C 85 8 95 8 97 3" />
      </svg>
    </section>
  );
}
