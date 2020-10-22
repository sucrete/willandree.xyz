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
        <h1 className="workTitle title"> Work</h1>
        <div className="workItemContainer">
          <div className=" workItem" onClick={this.onOpenFirstModal}>
            dumpTRUCK
          </div>
          <br />
          <Modal
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
            open={openFirst}
            onClose={this.onCloseFirstModal}
            center
          >
            <h1 className="modalHeader">Simple centered modal</h1>
          </Modal>
        </div>
        <div className="workItemContainer">
          <div className=" workItem" onClick={this.onOpenSecondModal}>
            MaxRosen.town
          </div>{" "}
          <br />
          <Modal
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
            open={openSecond}
            onClose={this.onCloseSecondModal}
            center
          >
            <div className="projectDesignation">project 02</div>
            <hr className="modalHR" />
            <h1 className="modalHeader">Simple centered modal dos</h1>
          </Modal>
        </div>
        <div className="workItemContainer">
          <div className=" workItem" onClick={this.onOpenThirdModal}>
            Old Town Lofts
          </div>{" "}
          <br />
          <Modal
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
            open={openThird}
            onClose={this.onCloseThirdModal}
            center
          >
            <h1 className="modalHeader">Simple centered modal tres</h1>
          </Modal>
        </div>
        <div className="workItemContainer">
          <div className=" workItem" onClick={this.onOpenFourthModal}>
            CalvinTodd.com
          </div>{" "}
          <br />
          <Modal
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
            open={openFourth}
            onClose={this.onCloseFourthModal}
            center
          >
            <h1 className="modalHeader">Simple centered modal quatro</h1>
          </Modal>
        </div>
        <div className="workItemContainer">
          <div className=" workItem" onClick={this.onOpenFifthModal}>
            The Voter's Companion
          </div>{" "}
          <br />
          <Modal
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
            open={openFifth}
            onClose={this.onCloseFifthModal}
            center
          >
            <h1 className="modalHeader">Simple centered modal cinco</h1>
          </Modal>
        </div>
      </section>
    );
  }
}
export default Work;
