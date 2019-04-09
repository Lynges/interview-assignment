import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Basket } from "./Basket.jsx";
import { LoadThenShow } from "./LoadThenShow.jsx";

export function BasketModal(props) {
  const [modalState, setModalState] = useState(false);
  function toggle() {
    setModalState(!modalState);
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Vis Varekurv
      </Button>
      <Modal size="lg" isOpen={modalState} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <LoadThenShow message="Henter varedata, vent venligst...">
            <Basket />
          </LoadThenShow>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Luk kurven
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
}
