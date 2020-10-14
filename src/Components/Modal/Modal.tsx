import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal as BSModal } from 'react-bootstrap'
import './Modal.css'


const Modal = (props: any) => {
  const { title, message, show, handleModalClose } = props;

  const [_show, setshow] = useState(show);

  useEffect(() => {
    setshow(show)
  }, [show]);

  console.log(_show)

  function Close() {
    setshow(false);
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
    // <div>
    //   {/* <div className="text-center">
    //     <a href="#myModal" className="trigger-btn" data-toggle={trigger ? "modal" : " "} ></a>
    //   </div> */}
    //   {/* Modal HTML */}
    //   <div id="myModal" className="modal fade">
    //     <div className="modal-dialog modal-confirm">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <div className="icon-box">
    //             <i className="material-icons"></i>
    //           </div>
    //           <h4 className="modal-title w-100">{title}</h4>
    //         </div>
    //         <div className="modal-body">
    //           <p className="text-center">{message}</p>
    //         </div>
    //         <div className="modal-footer">
    //           <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};


Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  trigger: PropTypes.bool,
  show: PropTypes.any,
  handleModalClose: PropTypes.func
};


export default Modal;
