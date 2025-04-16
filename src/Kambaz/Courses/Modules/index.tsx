import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { FormControl, ListGroup } from "react-bootstrap";
import SideGrip from "./SideGrip";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as modulesClient from "./client";



export default function Modules() {
  const {cid} = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const addModuleHandler = async () => {
    const newModule = await coursesClient.createModuleForCourse(cid!, {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, [cid]);

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div id="wd-modules-whole">
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModuleHandler}/> 
      <br /> <br /> <br /> <br /> 
       
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .map((module:any) => (
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary"> 
                <SideGrip />
                {!module.editing && module.name}
                { module.editing && (
                  <FormControl className="w-50 d-inline-block"
                        onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            saveModule({ ...module, editing: false });
                          }
                        }}
                        defaultValue={module.name}/>
                )}
                <ModuleControlButtons 
                  moduleId={module._id} 
                  deleteModule={(moduleId) => deleteModuleHandler(moduleId)} 
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
              </div>
              { module.lessons && <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson:any) => (
                  <ListGroup.Item className="wd-lesson p-3 ps-1 wd-bold-lesson">
                    <SideGrip />
                    {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  );
}
