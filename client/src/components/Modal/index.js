import React, { useState } from "react";
import {ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "../Button";
import { Modal } from "./style";

export const MyModal = ({show, setShow, confirm, title, children, centered}) => {
  return (
    <Modal isOpen={show} toggle={() => setShow(true)} centered={centered}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button className="dashboard-primary-btn" onClick={() => confirm()}>confirm</Button>
        <Button className="dashboard-sec-btn" onClick={() => setShow(false)}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};
