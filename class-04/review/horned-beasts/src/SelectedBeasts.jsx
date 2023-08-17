import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    const { selectedBeast, closeModal,  showModal } = this.props;

    // if (!selectedBeast) {
    //   return null;
    // }
    console.log(showModal);
    return (
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedBeast.image_url} alt={selectedBeast.title} />
          <p>{selectedBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
