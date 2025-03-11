import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import BooleanStateVariables from "./BooleanStateVariables.tsx";
import StringStateVariables from "./StringStateVariables.tsx";
import DateStateVariable from "./DateStateVariable.tsx";
import ObjectStateVariable from "./ObjectStateVariables.tsx";
import ArrayStateVariables from "./ArrayStateVariables.tsx";
import ParentStateComponent from "./ParentStateComponent.tsx";
import ReduxExamples from "./ReduxExamples/index.tsx";

export default function Lab4() {
  function sayHello() {
    alert('Hello');
  }

  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariables />
      <ParentStateComponent />
      <ReduxExamples />
    </div>
  )
}