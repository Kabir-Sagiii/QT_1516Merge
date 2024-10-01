import { useReducer } from "react";
import "./App.css";
import Input from "./Redux-Concept/components/Input";
import Display from "./Redux-Concept/components/Display";
import Counter from "./components/useReducer/Counter";
function App() {
  return (
    <div className="App">
      <Input />
      <hr />
      <Display />
    </div>
  );
}

export default App;
