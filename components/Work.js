import { useInView } from "react-intersection-observer";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import { useTrail, animated } from "react-spring";

import Favorites from "./Favorites";

import DumpTRUCKContent from "./ModalContent/DumpTRUCK";
import MaxContent from "./ModalContent/MaxRosen";
import CalvinContent from "./ModalContent/CalvinTodd";
import OTLContent from "./ModalContent/OTL";
import VOTRContent from "./ModalContent/TheVotersCompanion";
import WillContent from "./ModalContent/WillAndreedotxyz";

const work = [
  "dumpTRUCK",
  "maxrosen.town",
  "Old Town Lofts",
  "calvintodd.com",
  "The Voter's Companion",
];
const tittle = ["Work"];
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
    threshold: 0.35,
    triggerOnce: true,
  });
  const trail = useTrail(work.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    delay: 100,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  const trail2 = useTrail(tittle.length, {
    config: { mass: 5, tension: 2200, friction: 200 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
    from: { opacity: 0, x: 10 },
  });
  return (
    <section className="work">
      <div className="workContainer scroll">
        <div ref={ref} className="workBody">
          {trail2.map(({ x, ...rest }, index) => (
            <animated.div
              className="workHeader title"
              key={tittle[index]}
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
              }}
            >
              {tittle[index]}
            </animated.div>
          ))}
          {trail.map(({ x, ...rest }, index) => (
            <animated.span
              className={`workItemContainer ${modals[index]}Container`}
              key={work[index]}
              style={{
                ...rest,
                top: x.interpolate((x) => `${x}px`),
                cursor: "pointer",
              }}
              onClick={functions[modals[index]].o}
            >
              <span>{work[index]}</span>
              <br />
            </animated.span>
          ))}
        </div>
      </div>
      <Favorites />
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
