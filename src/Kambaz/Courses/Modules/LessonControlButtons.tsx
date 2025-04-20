import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useSelector } from "react-redux";


export default function LessonControlButtons() {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  return (
    <div className="float-end">
      {currentUser.role === "FACULTY" && <GreenCheckmark green={false}/>}
      <IoEllipsisVertical className="fs-4" />
    </div> );
}