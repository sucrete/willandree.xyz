function VueCapsule() {
  return (
    <span className="lilCapsule" style={{color: "white", background: "#54b883"}}>Vue.js</span>
  )
}
export default function TheVotersCompanion() {
  return (
    <>
      <div className="projectDesignation">2018-2020</div>
      <div className="modalBody votersCompanion">
        <h1 className="modalHeader">The Voter's Companion</h1>
        <div className="modalSubheading">
        <VueCapsule/><span style={{marginLeft: "3px"}} className="lilCapsule lilCapsule--votr">Unsupported</span>
          
        </div>
        <div className="modalContent">
          <div className="modalImagesContainer">
            <ul><li style={{opacity: "1"}}><img style={{height: "100%", width: "auto"}} src="/votr.svg" className="liImage" alt="Voter's Companion image" /></li></ul>
          </div>
          <h1 className="modalHeaderLower">The Voter's Companion</h1>
          <div className="modalSubheadingLower">
          <VueCapsule/><span style={{marginLeft: "3px"}} className="lilCapsule lilCapsule--votr">Unsupported</span>
            
          </div>
          <div className="modalDetails">
            <p>
            Originally created to display my acumen as a developer, The Voter's Companion quickly evolved in to an undertaking of great personal significance. In response to the scarcity of basic voting information - such as when and where to vote, voting requirements and eligibility, who one's representatives are, and registering to vote online - I created this "pamphlet"
            </p>

            <a
              className="visitButton"
              href="https://thevoterscompanion.herokuapp.com"
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
