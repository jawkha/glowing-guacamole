import React from "react";
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
      isOpen: false,
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

            <Modal isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
              <ModalHeader>
                <ModalClose onClick={this.hideModal}/>
                <ModalTitle>Modal title</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aspernatur assumenda ex iure, necessitatibus odit optio quas
                  recusandae repellat totam. Alias dignissimos ea obcaecati quae
                  qui recusandae rem repellendus, vel veniam!</p>

                <p>Consequatur delectus doloremque in quam qui reiciendis rem
                  ut. Culpa cupiditate doloribus eos est ex illum magni nesciunt
                  obcaecati odit ratione, saepe vitae? Accusantium aliquid
                  assumenda fugiat perferendis ratione suscipit!</p>

                </ModalBody>
              <ModalFooter>
                <button className='btn btn-default' onClick={this.hideModal}>
                  Close
                </button>
              </ModalFooter>
            </Modal>
          </span>
    );
  }
}

export default DonateModal;