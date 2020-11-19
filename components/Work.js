import React, { useState, useEffect, useRef } from "react";
import WorkTitle from "./WorkTitle";
import { Modal } from "react-responsive-modal";
import WorkTrail from "./Trail";

class Work extends React.Component {
  state = {
    openFirst: false,
    openSecond: false,
    openThird: false,
    openFourth: false,
    openFifth: false,
    openSixth: false,
  };
  render() {
    const {
      openFirst,
      openSecond,
      openThird,
      openFourth,
      openFifth,
      openSixth,
    } = this.state;

    const indexOfFunctions = {
      first: {
        o: () => {
          this.setState({ openFirst: true });
        },
        c: () => {
          this.setState({ openFirst: false });
        },
      },
      second: {
        o: () => {
          this.setState({ openSecond: true });
        },
        c: () => {
          this.setState({ openSecond: false });
        },
      },
      third: {
        o: () => {
          this.setState({ openThird: true });
        },
        c: () => {
          this.setState({ openThird: false });
        },
      },
      fourth: {
        o: () => {
          this.setState({ openFourth: true });
        },
        c: () => {
          this.setState({ openFourth: false });
        },
      },
      fifth: {
        o: () => {
          this.setState({ openFifth: true });
        },
        c: () => {
          this.setState({ openFifth: false });
        },
      },
      sixth: {
        o: () => {
          this.setState({ openSixth: true });
        },
        c: () => {
          this.setState({ openSixth: false });
        },
      },
    };
    const work = [
      "dumpTRUCK",
      "maxrosen.town",
      "Old Town Lofts",
      "calvintodd.com",
      "The Voter's Companion",
      "willandree.xyz",
    ];
    const modalOrdinals = [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
    ];
    const allYourWork = work.map((project, index) => (
      <span
        className="workItemContainer"
        onClick={indexOfFunctions[modalOrdinals[index]].o}
      >
        <span className="workItem">{project}</span>
      </span>
    ));
    function WorkBody() {
      return (
        <div className="workBodyBody">
          <div className="workBody">
            <WorkTrail>{allYourWork}</WorkTrail>
            <Modal
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              open={openFirst}
              onClose={indexOfFunctions.first.c}
              center
            >
              <div className="projectDesignation">i</div>

              <div className="modalBody">
                <h1 className="modalHeader">dumpTRUCK</h1>
              </div>
            </Modal>
            <Modal
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              open={openSecond}
              onClose={indexOfFunctions.second.c}
              center
            >
              <div className="projectDesignation">ii</div>
              <div className="modalBody">
                <h1 className="modalHeader">maxrosen.town</h1>
              </div>
            </Modal>
            <Modal
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              open={openThird}
              onClose={indexOfFunctions.third.c}
              center
            >
              <div className="projectDesignation">iii</div>
              <div className="modalBody">
                <h1 className="modalHeader">Old Town Lofts</h1>
              </div>
            </Modal>
            <Modal
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              open={openFourth}
              onClose={indexOfFunctions.fourth.c}
              center
            >
              <div className="projectDesignation">iv</div>
              <div className="modalBody">
                <h1 className="modalHeader">calvintodd.com</h1>
                <div className="modalSubheading">personal website</div>
              </div>
            </Modal>
            <Modal
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              open={openFifth}
              onClose={indexOfFunctions.fifth.c}
              center
            >
              <div className="projectDesignation">v</div>
              <div className="modalBody">
                <h1 className="modalHeader">The Voter's Companion</h1>
              </div>
            </Modal>
            <Modal
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              open={openSixth}
              onClose={indexOfFunctions.sixth.c}
              center
            >
              <div className="projectDesignation">vi</div>
              <div className="modalBody">
                <h1 className="modalHeader">willandree.xyz</h1>
              </div>
            </Modal>
          </div>
        </div>
      );
    }

    return (
      <section className="workSection">
        <div className="workSectionBody">
          <WorkTitle />
          <WorkBody />
        </div>
      </section>
    );
  }
}
export default Work;
