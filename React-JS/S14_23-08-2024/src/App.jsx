import Navbar from "./components/navbar/Navbar";
import ImageC from "./components/imagec/ImageC";
import Profile from "./components/profile/Profile";
import Counter from "./components/counter/Counter";
import EventHandler from "./components/eventhandler/EventHandler";
import State from "./components/practice/State";
function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Counter />
      <EventHandler />
      <State />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
