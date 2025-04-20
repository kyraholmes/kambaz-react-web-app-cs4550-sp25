import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { IoBanOutline } from "react-icons/io5";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ModulesControls(
  {moduleName, setModuleName, addModule} :
  {
    moduleName: string;
    setModuleName: (title: string) => void;
    addModule: () => void;
  }
) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {currentUser.role === "FACULTY" && 
        <>
          <Button variant="danger" onClick={handleShow} size="lg" className="me-1 float-end" id="wd-add-module-btn">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Module
          </Button>
          <Dropdown className="float-end me-2">
            <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
            <GreenCheckmark green={false}/> Publish All
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item id="wd-publish-all">
                <GreenCheckmark green={false}/> Publish All
              </Dropdown.Item>
              <Dropdown.Item id="wd-publish-all-modules-and-items">
                <GreenCheckmark green={false}/> Publish all modules and items
              </Dropdown.Item>
              <Dropdown.Item id="wd-publish-modules-only">
                <GreenCheckmark green={false}/> Publish modules only
              </Dropdown.Item>
              <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                <IoBanOutline style={{width: "20px", height: "20px"}} /> Unpublish all modules and items
              </Dropdown.Item>
              <Dropdown.Item id="wd-unpublish-modules-only">
                <IoBanOutline style={{width: "20px", height: "20px"}} /> Unpublish modules only
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="light" size="lg" className="me-1 float-end" id="wd-view-progress">
            View Progress
          </Button>
        </> 
      }
      <Button variant="light" size="lg" className="me-1 float-end" id="wd-collapse-all">
        Collapse All
      </Button>
      <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
       moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
    </div>
  );
}
