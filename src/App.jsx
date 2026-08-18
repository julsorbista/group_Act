import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import ElectricityBill from "./pages/ElectricityBill";
import AttendanceChecker from "./pages/AttendanceChecker";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
        <h2>React Activity Portal</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/activity2">Activity 2</Link>
          <Link to="/activity3">Activity 3</Link>
          <Link to="/activity4">Activity 4</Link>
          <Link to="/activity5">Activity 5</Link>
        </div>
      </nav>

      <div className="container">
        <Routes>

          <Route path="/" element={
              <div className="card">
                <h1>React Activity Portal</h1>
                <p>Select an activity from the navigation bar.</p>
              </div> 
          }/>

          <Route path="/activity2" element={<GradeEvaluation />} />

          <Route path="/activity3" element={<PasswordChecker />} />

          <Route path="/activity4" element={<ElectricityBill />} />

          <Route path="/activity5" element={<AttendanceChecker />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;