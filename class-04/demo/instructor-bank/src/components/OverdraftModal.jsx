import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class OverdraftModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.warning} onHide={this.props.toggleWarning}>
        <Modal.Header closeButton>
          <Modal.Title>Overdraft Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Not enough money in the bank :(</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.toggleWarning}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default OverdraftModal;
