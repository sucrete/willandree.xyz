import { useInView } from "react-intersection-observer";
import { Modal } from "react-responsive-modal";
import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import Skills from "../components/Skills";
import DumpTRUCKContent from "./ModalContent/DumpTRUCK";
import MaxContent from "./ModalContent/MaxRosen";
import CalvinContent from "./ModalContent/CalvinTodd";
import OTLContent from "./ModalContent/OTL";
import VOTRContent from "./ModalContent/TheVotersCompanion";
import WillContent from "./ModalContent/WillAndreedotxyz";
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
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const trail = useTrail(work.length, {
    config: { mass: 6, tension: 1700, friction: 250 },
    opacity: inView ? 1 : 0,
    delay: 1000,
    x: inView ? 0 : 50,
    from: { opacity: 0, x: 50 },
  });
  return (
    <section className="work">
      <div className={`workHeader inView${inView}Title`}>work</div>
      <div ref={ref} className="workContainer">
        <div className="workBody">
          {trail.map(({ x, ...rest }, index) => (
            <animated.div
              className={`workItemContainer ${modals[index]}Container`}
              key={work[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                cursor: "pointer",
              }}
              onClick={functions[modals[index]].o}
            >
              <div className="shadowDiv"></div>
              <animated.span className={`workItem ${modals[index]}`}>
                {work[index]}
              </animated.span>
            </animated.div>
          ))}
        </div>
        <Skills />
      </div>

      <MyModal bool={dumpTRUCK} closeFunction={functions.dt.c}>
        <DumpTRUCKContent />
      </MyModal>
      <MyModal bool={maxRosen} closeFunction={functions.mr.c}>
        <MaxContent />
      </MyModal>

      <MyModal bool={OTL} closeFunction={functions.otl.c}>
        <OTLContent />
      </MyModal>
      <MyModal bool={calvin} closeFunction={functions.cal.c}>
        <CalvinContent />
      </MyModal>
      <MyModal bool={votr} closeFunction={functions.votr.c}>
        <VOTRContent />
      </MyModal>
      <MyModal bool={willAndree} closeFunction={functions.wil.c}>
        <WillContent />
      </MyModal>
    </section>
  );
}
