import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null); 

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheck = () => {
    if (password.length === 0) {
      setResult({
        message: "Please enter a password.",
        strength: null,
      });
      return;
    }

    let strength;
    if (password.length < 6) {
      strength = "Weak";
    } else if (password.length < 10) {
      strength = "Medium";
    } else {
      strength = "Strong";
    }

    const status =
      strength === "Strong"
        ? "You can use this password."
        : "Create a stronger password.";

    setResult({
      message: `Password Status: ${strength}`,
      status,
      strength,
    });
  };

  const handleClear = () => {
    setPassword("");
    setResult(null);
  };

  const strengthStyles = {
    Weak: { width: "33%", color: "#ef4444" },
    Medium: { width: "66%", color: "#f59e0b" },
    Strong: { width: "100%", color: "#22c55e" },
  };

  return (
    <div className="card">
      <h1>
        Password Strength Checker
        <span
          style={{
            display: "block",
            marginTop: "4px",
            fontSize: "20px",
            fontWeight: "normal",
          }}
        >
          Activity 3
        </span>
      </h1>

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      <div className="button-row">
        <button onClick={handleCheck}>Check Password</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      {result && (
        <div className="result">
          <h2>Result</h2>
          <p>{result.message}</p>
          <p>Character Count: {password.length}</p>

          {result.status && (
            <>
              <p>{result.status}</p>
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#ddd6d2",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: strengthStyles[result.strength].width,
                    height: "100%",
                    backgroundColor: strengthStyles[result.strength].color,
                    borderRadius: "999px",
                    transition: "width 0.2s ease",
                  }}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default PasswordChecker;
