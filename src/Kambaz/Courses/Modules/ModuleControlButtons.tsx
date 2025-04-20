import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";


export default function LessonControlButtons(
  { moduleId, deleteModule, editModule}: 
  { moduleId: string; 
    deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void;
  }) 
  {
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="float-end align-items-center" >
      {currentUser.role === "FACULTY" ? <>
        <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
        <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
        <GreenCheckmark green={false}/>
        <FaPlus />
      </> : null}
      <IoEllipsisVertical className="fs-4" />
    </div> );
}