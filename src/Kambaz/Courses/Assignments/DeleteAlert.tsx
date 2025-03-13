import { Modal, Button } from "react-bootstrap";

export default function DeleteAlert({ show, handleClose, deleteAssignment, aid}: {
 show: boolean; 
 handleClose: () => void;
 deleteAssignment: (assignmentId:string) => void;
 aid: string;}) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>Are you sure you want to delete this Assignment?</Modal.Title>
   </Modal.Header>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      deleteAssignment(aid);
      handleClose();
     }} > Delete </Button>
   </Modal.Footer>
  </Modal>
);}
