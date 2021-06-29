function VueCapsule() {
  return (
    <span className="lilCapsule" style={{color: "white", background: "#54b883", marginLeft: "3px"}}>Vue</span>
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
            {/* <ul>{imageSlides}</ul> */}
          </div>
          <h1 className="modalHeaderLower">The Voter's Companion</h1>
          <div className="modalSubheadingLower">
          <VueCapsule/><span style={{marginLeft: "3px"}} className="lilCapsule lilCapsule--votr">Unsupported</span>
            
          </div>
          <div className="modalDetails">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              impedit numquam praesentium recusandae blanditiis quia sequi,
              repellat vel consectetur autem labore earum libero, quod minima
              culpa optio sapiente expedita alias!
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
