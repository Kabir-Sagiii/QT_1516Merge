import "./App.css";
import A from "./components/A";
import B from "./components/B";
import Display from "./components/Display";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path={"/"}
          element={
            <div style={{ padding: "30px" }}>
              <A />
              <hr />
              <B />
            </div>
          }
        />
        <Route path={"/result"} element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
