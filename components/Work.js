import { Modal } from "react-responsive-modal";

class Work extends React.Component {
  state = {
    openFirst: false,
    openSecond: false,
    openThird: false,
    openFourth: false,
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
  render() {
    const { openFirst, openSecond, openThird, openFourth } = this.state;
    return (
      <section>
        <h1 className="title" style={{ fontSize: "5em" }}>
          {" "}
          Work
        </h1>
        <div>
          <span className="clickable karla" onClick={this.onOpenFirstModal}>
            dumpTRUCK
          </span>
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
            <h2>Simple centered modal</h2>
          </Modal>
        </div>
        <div>
          <span className="clickable karla" onClick={this.onOpenSecondModal}>
            Max Rosen
          </span>{" "}
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
            <h2>Simple centered modal dos</h2>
          </Modal>
        </div>
      </section>
    );
  }
}
export default Work;
