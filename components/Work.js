import { useInView } from "react-intersection-observer";
import { Modal } from "react-responsive-modal";
import { useEffect, useState } from "react";
import { useTrail, animated } from "react-spring";
import window from "global";

function getWindowDimensions() {
  const { innerHeight: height, innerWidth: width } = window;
  if (height > 800) return { titleDelay: 2000, bodyDelay: 2110 };
  if (width < 417) return { titleDelay: 700, bodyDelay: 810 };
  return { titleDelay: 200, bodyDelay: 310 };
}
import Education from "./Education";

import DumpTRUCKContent from "./ModalContent/DumpTRUCK";
import MaxContent from "./ModalContent/MaxRosen";
import CalvinContent from "./ModalContent/CalvinTodd";
import OTLContent from "./ModalContent/OTL";
import VOTRContent from "./ModalContent/TheVotersCompanion";

const work = [
  "dumpTRUCK",
  "maxrosen.town",
  "Old Town Lofts",
  "calvintodd.com",
  "The Voter's Companion",
];
const tittle = ["select work"];
const modals = ["dt", "mr", "otl", "cal", "votr", "wil"];

export default function Work() {
  const [dumpTRUCK, setDumpTRUCK] = useState(false);
  const [maxRosen, setMaxRosen] = useState(false);
  const [OTL, setOTL] = useState(false);
  const [calvin, setCalvin] = useState(false);
  const [votr, setVotr] = useState(false);

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
  };
  const [heightCheck, checkHeight] = useState(getWindowDimensions());
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  const addEventListeners = () => {
    window.addEventListener("resize", handleResize);
  };

  const removeEventListeners = () => {
    window.removeEventListener("resize", handleResize);
  };
  const handleResize = () => {
    checkHeight(getWindowDimensions());
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
    config: { mass: 5, tension: 2000, friction: 250 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    delay: heightCheck.bodyDelay,
    from: { opacity: 0, x: 20 },
  });
  const trail2 = useTrail(tittle.length, {
    config: { mass: 5, tension: 2200, friction: 500 },
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    delay: heightCheck.titleDelay,
    from: { opacity: 0, x: 20 },
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
        <Education />
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
    </section>
  );
}
