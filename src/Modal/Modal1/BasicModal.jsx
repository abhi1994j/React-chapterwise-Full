import React, { useState } from "react";
import "../Modal.css";
import AlertDialog from "../Modalpractice/AlertDialog";

const BasicModal = () => {
  const [Modal, setShowModal] = useState(false);
  const CloseModal = () => setShowModal(false);

  return (
    <>
      <div className="Modal-wrapper"></div>
      <div className="Modal.container">
        <button onClick={() => {setShowModal(true)}}>click it</button>
        {Modal && <AlertDialog />}
      </div>
    </>
  );
};

export default BasicModal;
