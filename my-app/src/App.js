// import logo from "./logo.svg";
import "./App.css";
import ContextParent from "./components/Context/ContextParent";
import { ChildA } from "./components/Context/ContextChildren";
// import UseState from "./components/UseState/UseState";
// import UseReducer from "./components/UseReducer/UseReducer";
// import GrandParentOne from "./Optimization/GrandParentOne";
// import ParentTwo from "./Optimization/ParentTwo";

function App() {
  return (
    <div className="App">
      {/* <UseState />
      <UseReducer /> */}

      {/* <ParentTwo /> */}

      {/* <GrandParentOne /> */}

      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
