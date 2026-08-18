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
          <Route
            path="/"
            element={
              <div className="home">
                <div className="home-title">
                  <h1>React Activity Portal</h1>
                  <h2>Palitan niyo na lang yun UI</h2>
                </div>

                <div className="activity-grid">
                  <div className="activity-card">
                    <div className="number">2</div>
                    <h2>Student Grade Evaluation</h2>
                    <p> Enter a student's score and get an automatic remark based on grade ranges. </p>
                    <Link to="/activity2" className="open-button">
                      Open Activity
                    </Link>
                  </div>

                  <div className="activity-card">
                    <div className="number">3</div>
                    <h2>Password Strength Checker</h2>
                    <p>Check password length and receive live feedback on how strong it is. </p>
                    <Link to="/activity3" className="open-button">
                      Open Activity
                    </Link>
                  </div>

                  <div className="activity-card">
                    <div className="number">4</div>
                    <h2>Electricity Bill Calculator</h2>
                    <p>Calculate a customer's electricity bill based on kWh consumption and tiered rates.</p>
                    <Link to="/activity4" className="open-button">
                      Open Activity
                    </Link>
                  </div>

                  <div className="activity-card">
                    <div className="number">5</div>
                    <h2>Employee Attendance Checker</h2>
                    <p>Check an employee's time-in and determine whether they are on time, late, or very late.</p>

                    <Link to="/activity5" className="open-button">
                      Open Activity
                    </Link>
                  </div>
                </div>
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