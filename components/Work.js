import { Modal } from "react-responsive-modal";

class Work extends React.Component {
  state = {
    openFirst: false,
    openSecond: false,
    openThird: false,
    openFourth: false,
    openFifth: false,
  };

  onOpenFirstModal = () => {
    this.setState({ openFirst: true });
  };
  onCloseFirstModal = () => {
    this.setState({ openFirst: false });
  };
  onOpenSecondModal = () => {
    this.setState({ openSecond: true });
  };
  onCloseSecondModal = () => {
    this.setState({ openSecond: false });
  };
  onOpenThirdModal = () => {
    this.setState({ openThird: true });
  };
  onCloseThirdModal = () => {
    this.setState({ openThird: false });
  };
  onOpenFourthModal = () => {
    this.setState({ openFourth: true });
  };
  onCloseFourthModal = () => {
    this.setState({ openFourth: false });
  };
  onOpenFifthModal = () => {
    this.setState({ openFifth: true });
  };
  onCloseFifthModal = () => {
    this.setState({ openFifth: false });
  };
  render() {
    const {
      openFirst,
      openSecond,
      openThird,
      openFourth,
      openFifth,
    } = this.state;
    return (
      <section className="workSection">
        <div className="workSectionBody">
          <div className="workContainer">work</div>{" "}
          <div className="workBody">
            <span className="workItemContainer">
              <span className=" workItem" onClick={this.onOpenFirstModal}>
                dumpTRUCK
              </span>
              <Modal
                classNames={{
                  overlay: "customOverlay",
                  modal: "customModal",
                }}
                open={openFirst}
                onClose={this.onCloseFirstModal}
                center
              >
                <div className="projectDesignation">i</div>

                <div className="modalBody">
                  <h1 className="modalHeader">dumpTRUCK</h1>
                </div>
              </Modal>
            </span>
            <span className="workItemContainer">
              <span className=" workItem" onClick={this.onOpenSecondModal}>
                maxrosen.town
              </span>
              <Modal
                classNames={{
                  overlay: "customOverlay",
                  modal: "customModal",
                }}
                open={openSecond}
                onClose={this.onCloseSecondModal}
                center
              >
                <div className="projectDesignation">ii</div>
                <div className="modalBody">
                  <h1 className="modalHeader">maxrosen.town</h1>
                </div>
              </Modal>
            </span>
            <span className="workItemContainer">
              <span className=" workItem" onClick={this.onOpenThirdModal}>
                Old Town Lofts
              </span>
              <Modal
                classNames={{
                  overlay: "customOverlay",
                  modal: "customModal",
                }}
                open={openThird}
                onClose={this.onCloseThirdModal}
                center
              >
                <div className="projectDesignation">iii</div>
                <div className="modalBody">
                  <h1 className="modalHeader">Old Town Lofts</h1>
                </div>
              </Modal>
            </span>
            <span className="workItemContainer">
              <span className=" workItem" onClick={this.onOpenFourthModal}>
                calvintodd.com
              </span>
              <Modal
                classNames={{
                  overlay: "customOverlay",
                  modal: "customModal",
                }}
                open={openFourth}
                onClose={this.onCloseFourthModal}
                center
              >
                <div className="projectDesignation">iv</div>
                <div className="modalBody">
                  <h1 className="modalHeader">talvintodd.com</h1>
                </div>
              </Modal>
            </span>
            <span className="workItemContainer">
              <span className=" workItem" onClick={this.onOpenFifthModal}>
                The Voter's Companion
              </span>
              <Modal
                classNames={{
                  overlay: "customOverlay",
                  modal: "customModal",
                }}
                open={openFifth}
                onClose={this.onCloseFifthModal}
                center
              >
                <div className="projectDesignation">v</div>
                <div className="modalBody">
                  <h1 className="modalHeader">The Voter's Companion</h1>
                </div>
              </Modal>
            </span>
          </div>
        </div>
      </section>
    );
  }
}
export default Work;
