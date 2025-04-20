import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import DeleteAlert from "./DeleteAlert";


export default function AssignmentControlButtons(
  {deleteAssignment, aid} : {deleteAssignment: (assignmentId : string) => void, aid : string}
) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div className="float-end align-items-center">
      {currentUser.role === "FACULTY" && <>
        <MdDeleteOutline className="ms-2" onClick={(event) => {
          event.preventDefault();
          handleShow();
        }}/>
        <GreenCheckmark green={false}/>
      </>}
      <IoEllipsisVertical className="fs-4 ms-2" />
      <DeleteAlert show={show} handleClose={handleClose} deleteAssignment={deleteAssignment} aid={aid}/>
    </div> );
}