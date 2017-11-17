import React from "react";
import FaPaypal from "react-icons/lib/fa/paypal";
import FaEur from "react-icons/lib/fa/eur";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from "react-modal-bootstrap";

class DonateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <span>
        <button className={this.props.bootstrapProps} onClick={this.openModal}>
          DONATE
        </button>

        <Modal
          isOpen={this.state.isOpen}
          size="modal-md"
          onRequestHide={this.hideModal}
        >
          <ModalHeader>
            <ModalTitle>DONATE</ModalTitle>
            <ModalClose onClick={this.hideModal} />
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <input type="radio" name="method" value="ideal" />
              <label>&nbsp;&nbsp;IDEAL</label>&nbsp;&nbsp;
              <input type="radio" name="method" value="paypal" />
              <label>
                &nbsp;&nbsp;<FaPaypal />&nbsp;&nbsp;PayPal
              </label>
              <div className="input-group">
                <div className="input-group-addon">
                  <FaEur />
                </div>
                <input
                  name="amount"
                  type="text"
                  className="form-control"
                  placeholder="Amount"
                />
              </div>
              <br />
              <button type="submit" className="btn btn-danger btn-sm">
                Donate
              </button>
            </div>
          </ModalBody>
        </Modal>
      </span>
    );
  }
}

export default DonateModal;
