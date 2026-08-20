import { useState } from "react";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const checkAttendance = () => {
    setError("");

    if (employeeName.trim() === "") {
      setError("Invalid input. Please enter a name.");
      setAttendanceStatus("");
      setMessage("");
      return;
    }

    if (timeIn === "") {
      setError("Invalid input. Please enter time in.");
      setAttendanceStatus("");
      setMessage("");
      return;
    }

    const time = Number(timeIn);

    if (isNaN(time) || time < 0 || time > 24) {
      setError("Please enter a valid time between 0 and 24 only.");
      setAttendanceStatus("");
      setMessage("");
      return;
    }

    if (time <= 8) {
      setAttendanceStatus("On Time");
      setMessage("Status: On Time - Good job!");
    } else if (time <= 9) {
      setAttendanceStatus("Late");
      setMessage("Status: Late - Please be on time tomorrow.");
    } else {
      setAttendanceStatus("Very Late");
      setMessage("Status: Very Late - Report to your supervisor.");
    }
  };

  const resetAttendance = () => {
    setEmployeeName("");
    setTimeIn("");
    setAttendanceStatus("");
    setMessage("");
    setError("");
  };

  return (
    
  <div className="card">
      <h1>
        Employee Attendance Checker

        <span
          style={{
            display: "block",
            marginTop: "4px",
            fontSize: "20px",
            fontWeight: "normal",
          }}
        >
          Activity 5
        </span>
      </h1>
  
      <label>Employee Name</label>
      <input
        type="text"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        placeholder="Enter employee name"
      />

      <label>Time In</label>
      <input
        type="number"
        value={timeIn}
        onChange={(e) => setTimeIn(e.target.value)}
        placeholder="Example: 8.5 = 8:30 AM"
        step="0.1"
      />

      <div className="button-row">
        <button onClick={checkAttendance}>Check Attendance</button>
        <button onClick={resetAttendance}>Reset</button>
      </div>

      {error && <div className="result">{error}</div>}

      {attendanceStatus && (
        <div className="result">
          <p>
            <strong>Employee Name:</strong> {employeeName}
          </p>

          <p>
            <strong>Time In:</strong> {timeIn}
          </p>

          <p>
            <strong>Attendance Status:</strong> {attendanceStatus}
          </p>

          <p>{message}</p>
        </div>
      )}
    </div>
  );
}


export default AttendanceChecker;
