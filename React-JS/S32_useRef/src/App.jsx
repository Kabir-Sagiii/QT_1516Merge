import A from "./components/Parent-Child/context-api/A";
import "./App.css";
import UseRefC from "./components/useRef/UseRefC";
import DomRef from "./components/useRef/DomRef";
import UseREducerComp from "./components/use-reducer/UseREducerComp";
function App() {
  return (
    <div className="App">
      <UseREducerComp />
      <hr />
      <DomRef />
      <br />
      <br />
      <hr />
      <UseRefC />
    </div>
  );
}

export default App;
