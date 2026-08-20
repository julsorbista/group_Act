import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import ElectricityBill from "./pages/ElectricityBill";
import AttendanceChecker from "./pages/AttendanceChecker";

const activities = [
  {
    number: 2,
    title: "Student Grade Evaluation",
    description:
      "Enter a student's score and get an automatic remark based on grade ranges.",
    path: "/activity2",
  },
  {
    number: 3,
    title: "Password Strength Checker",
    description:
      "Check password length and receive live feedback on how strong it is.",
    path: "/activity3",
  },
  {
    number: 4,
    title: "Electricity Bill Calculator",
    description:
      "Calculate a customer's electricity bill based on kWh consumption and tiered rates.",
    path: "/activity4",
  },
  {
    number: 5,
    title: "Employee Attendance Checker",
    description:
      "Check an employee's time-in and determine whether they are on time, late, or very late.",
    path: "/activity5",
  },
];

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="brand">
          <div className="brand-logo">R</div>
          <h2>React Activity Portal</h2>
        </div>

        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/activity2"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Activity 2
          </NavLink>

          <NavLink
            to="/activity3"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Activity 3
          </NavLink>

          <NavLink
            to="/activity4"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Activity 4
          </NavLink>

          <NavLink
            to="/activity5"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Activity 5
          </NavLink>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home">
                <h1 className="home-title">React Activity Portal</h1>

                <p className="home-subtitle">
                  Four interactive React activities demonstrating state,
                  events, conditional logic, validation, and calculations.
                </p>

                <div className="activity-grid">
                  {activities.map((activity) => (
                    <div className={`activity-card activity-${activity.number}`} key={activity.number}>
                      <div className="activity-badge">{activity.number}</div>

                      <h3>{activity.title}</h3>

                      <p>{activity.description}</p>

                      <NavLink to={activity.path} className="open-button">
                        Open Activity
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

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