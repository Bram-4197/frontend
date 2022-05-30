import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home"
import Error from "./Components/404"
import SideBar from './Components/Sidebar';
import About from "./Components/About";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
    <div className="App">
        <Router>
          <div className="flex">
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Scoreboard" element={<Scoreboard />} />
              <Route path="/Team" element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
