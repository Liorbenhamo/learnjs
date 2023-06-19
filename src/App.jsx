import Navbar from "../component/Navbar";
import Exercise from "../pages/Exercise";
import Homepage from "../pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Selectionpage from "../pages/Selectionpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />}></Route>
            <Route path="/selection" element={<Selectionpage />}></Route>
            <Route path="/exercise" element={<Exercise />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
