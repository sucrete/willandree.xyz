// import { useInView } from "react-intersection-observer";
import { Modal } from "react-responsive-modal";
import React, { useState, useRef } from "react";
import { useTrail, animated } from "react-spring";
import DumpTRUCKContent from "./ModalContent/DumpTRUCK";
// function WorkTrail({ open, children, ...props }) {
// const { ref, inView } = useInView({
//   threshold: 1,
//   triggerOnce: true,
// });
//   const items = React.Children.toArray(children);
//   const trail = useTrail(items.length, {
//     config: { mass: 5, tension: 1800, friction: 230 },
//     opacity: 1,
//     x: 0,
//     delay: 300,
//     from: { opacity: 0, x: 150 },
//   });

//   return (
//     <div className="trails-main">
//       <div>
//         {trail.map(({ x, ...rest }, index) => (
//           <a.div
//             key={index}
//             className="trails-text"
//             style={{
//               ...rest,
//               transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
//             }}
//           >
//             <a.div key={index}>{items[index]}</a.div>
//           </a.div>
//         ))}
//       </div>
//     </div>
//   );
// }
const work = [
  "dumpTRUCK",
  "maxrosen.town",
  "Old Town Lofts",
  "calvintodd.com",
  "The Voter's Companion",
  "willandree.xyz",
];
const modals = ["dt", "mr", "otl", "cal", "votr", "wil"];
// const allModals =

export default function Work() {
  const [dumpTRUCK, setDumpTRUCK] = useState(false);
  const [maxRosen, setMaxRosen] = useState(false);
  const [OTL, setOTL] = useState(false);
  const [calvin, setCalvin] = useState(false);
  const [votr, setVotr] = useState(false);
  const [willAndree, setWillAndree] = useState(false);
  const functions = {
    // dumpTRUCK
    dt: {
      o: () => {
        setDumpTRUCK(true);
      },
      c: () => {
        setDumpTRUCK(false);
      },
    },
    // maxRosen.town
    mr: {
      o: () => {
        setMaxRosen(true);
      },
      c: () => {
        setMaxRosen(false);
      },
    },
    // old town lofts
    otl: {
      o: () => {
        setOTL(true);
      },
      c: () => {
        setOTL(false);
      },
    },
    // calvin Todd
    cal: {
      o: () => {
        setCalvin(true);
      },
      c: () => {
        setCalvin(false);
      },
    },
    // The Voter's Companion
    votr: {
      o: () => {
        setVotr(true);
      },
      c: () => {
        setVotr(false);
      },
    },
    // willandree.xyz
    wil: {
      o: () => {
        setWillAndree(true);
      },
      c: () => {
        setWillAndree(false);
      },
    },
  };
  const trail = useTrail(work.length, {
    // items,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
    config: { mass: 5, tension: 2000, friction: 200 },
  });
  const MyModal = (props) => (
    <Modal
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      center
      open={props.bool}
      onClose={props.closeFunction}
    >
      {props.children}
    </Modal>
  );
  return (
    <section className="work">
      <div className="workContainer" style={{ color: "#1e2018" }}>
        work
      </div>
      {trail.map(({ x, ...rest }, index) => (
        <animated.a
          className="workItemContainer"
          key={work[index]}
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            cursor: "pointer",
          }}
          onClick={functions[modals[index]].o}
        >
          <animated.span className="workItem">{work[index]}</animated.span>
        </animated.a>
      ))}
      {/* <Modal
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
        open={dumpTRUCK}
        onClose={functions.dt.c}
      ></Modal> */}
      <MyModal bool={dumpTRUCK} closeFunction={functions.dt.c}>
        <DumpTRUCKContent />
      </MyModal>
      {/* <Modal
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
        </Modal> */}
    </section>
  );
}
