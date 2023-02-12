import DynamicRouting from "./Abstackles/DynamicRouting";
import Mainbootstrap from "./Bootstrap/Mainbootstrap";
import ClassMain from "./Class Components/ClassMain";
import ConditionMain from "./Conditional/ConditionMain";
import MainControl from "./ControlledComponents/Main/MainControl";
import MainCss from "./CssFolder/MainCss";
import EventMain from "./Event/EventMain";
import FetchMain from "./Fetch Api/Main/FetchMain";
import FormMain from "./FormValidation/FormMain";
import FunctionMain from "./Function Components/FunctionMain";
import MainHoc from "./HOC/Main/MainHoc";
import HookMain from "./HOOK/HookMain";
import ModalMain from "./Modal/ModalMain";
import MainRoute from "./ReactRouter/Main/MainRoute";
import BasicRoute from "./ReactRouter/Router/BasicRoute";



function App() {
 

  return (
    <>
      {/* <div className="Abstackles">
        <DynamicRouting/>
      </div> */}
      <Mainbootstrap/>
      <div className="classComp">
        <ClassMain/>
      </div>
      <div className="Condition">
         <ConditionMain/>
      </div>
      <div className="ControlComp">
        <MainControl/>
      </div>
      <div className="Css">
         <MainCss/>
      </div>
      <div className="Event">
        <EventMain/>
      </div>
      <div className="Fetch">
          <FetchMain/>
      </div>
      <div className="Form">
        <FormMain/>
      </div>
      <div className="Function">
        <FunctionMain/>
      </div>
      <div className="Hoc">
          <MainHoc/>
      </div>
      <div className="HOOK">
        <HookMain/>
      </div>
      <div className="Modal">
         <ModalMain/>
      </div>
      <div className="React-Router">
        <MainRoute/>
      </div>
    </>
  );
}
export default App;
     
