import React from "react";

import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props,children) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter modal-texto">
            <small> {props.value}</small>
          </Modal.Title>
        </Modal.Header>
             {children}
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyVerticallyCenteredModal;
