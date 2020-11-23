import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
export default function ModalW() {
  return (
    <div>
      <button onClick={this.onOpenModal}>Open modal</button>
      <Modal open={open} onClose={this.onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
  );
}
