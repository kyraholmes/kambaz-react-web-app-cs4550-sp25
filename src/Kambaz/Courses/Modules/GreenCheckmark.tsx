import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark({green}:{green: boolean}) {
  return (
    <span className="me-1 position-relative ms-3">
      <FaCheckCircle style={{ top: ".5px"}} className={`${green ? "opacity-50" : "opacity-100" } text-success me-1 position-absolute fs-5`} />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}