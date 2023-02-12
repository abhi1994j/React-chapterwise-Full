import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalExample() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

  return (
    <div>

      <Modal show={show}>
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>Your Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Name:</label>
              <input type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message :</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Enter message' rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Modal.Body>
      </Modal>



    </div>
  );
}

export default ModalExample;