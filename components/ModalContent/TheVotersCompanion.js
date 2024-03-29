function VueCapsule() {
  return (
    <span
      className="lilCapsule"
      style={{ color: "white", background: "#54b883" }}
    >
      Vue
    </span>
  );
}
export default function TheVotersCompanion() {
  return (
    <>
      <div className="projectDesignation">2018-2020</div>
      <div className="modalBody votersCompanion">
        <h1 className="modalHeader">The Voter's Companion</h1>
        <div className="modalSubheading">
          <VueCapsule />
          <span
            style={{ marginLeft: "3px" }}
            className="lilCapsule lilCapsule--vuetify"
          >
            Vuetify
          </span>
          <span
            style={{ marginLeft: "3px" }}
            className="lilCapsule lilCapsule--votr"
          >
            Unsupported
          </span>
        </div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul>
              <li style={{ opacity: "1" }}>
                <img
                  style={{ height: "100%", width: "auto" }}
                  src="/Votr2.png"
                  className="liImage"
                  alt="Voter's Companion image"
                />
              </li>
            </ul>
          </div>
          <h1 className="modalHeaderLower">The Voter's Companion</h1>
          <div className="modalSubheadingLower">
            <VueCapsule />
            <span
              style={{
                marginLeft: "3px",
                color: "#ebf7ff",
                background: "#2a98f6",
                fontWeight: "450",
              }}
              className="lilCapsule lilCapsule--vuetify"
            >
              Vuetify
            </span>
            <span
              style={{ marginLeft: "3px" }}
              className="lilCapsule lilCapsule--votr"
            >
              Unsupported
            </span>
          </div>
          <div className="modalDetails">
            <p>
              Originally created to show my aptitude as a developer, The Voter's
              Companion became an undertaking of great personal import. In
              response to the scarcity of basic voting information - such as
              when and where to vote, requirements to vote, who one's
              representatives are, and where to register to vote online - this
              app was developed to centralize these services. With generous
              cooperation from the U.S. Vote Foundation (and their API) The
              Voter's Companion became, in one way or another, a powerful tool
              of public utility.
            </p>

            <a
              className="visitButton"
              href="https://votr-2-0.vercel.app/"
              target="_blank"
            >
              visit
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
