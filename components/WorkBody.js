import React, { useState, useEffect, useRef } from "react";

import WorkTrail from "./WorkTrail";

class WorkBody extends React.Component {
  render() {
    function WorkBody() {
      return (
        <div className="workBodyBody">
          <div className="workBody"></div>
        </div>
      );
    }

    return (
      <section className="workSection">
        <div className="workSectionBody">
          <WorkBody />
        </div>
      </section>
    );
  }
}
export default WorkBody;
