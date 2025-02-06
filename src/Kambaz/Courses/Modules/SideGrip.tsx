import { BsGripVertical } from "react-icons/bs";

export default function SideGrip() {
  return (
    <span className="me-1 position-relative">
      <BsGripVertical className="me-2 fs-3 wd-side-grip" style={{height:"24px", width:"24px" }}/> 
    </span>
  );
}