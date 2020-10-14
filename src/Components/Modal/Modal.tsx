import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal as BSModal } from 'react-bootstrap'
import './Modal.css'


const Modal = (props: any) => {
  const { title, message, show, handleModalClose } = props;

  const [_show, setshow] = useState(show);

  // useEffect(() => {
  //   if (_show !== show) {
  //     setshow(show)
  //   }
  // }, [show]);

  console.log("from modal.tsx", _show)

  function Close() {
    setshow(!show);
    handleModalClose();
  }
  return (

    <BSModal
      show={_show} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-dialog modal-confirm"
    >

      <BSModal.Header className="">
        <div className="icon-box">
          <i className="material-icons"></i>
        </div>
      </BSModal.Header>
      <BSModal.Title className="text-center">
        {title}
      </BSModal.Title>
      <BSModal.Body className="modal-body">
        <p className="text-center"> {message}</p>
      </BSModal.Body>

      <BSModal.Footer>
        <Button className="btn btn-success btn-block" onClick={Close}>OK</Button>
      </BSModal.Footer>
    </BSModal>
  );
};




export default Modal;
