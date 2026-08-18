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
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Password Strength Checker</h1>
          <p style={styles.subtitle}>Activity 3</p>
        </div>

        {/* Body */}
        <div style={styles.body}>
          <label style={styles.label}>Password</label>
          <input
            type="text"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            style={styles.input}
          />
          <p style={styles.charCount}>Character count: {password.length}</p>

          <div style={styles.buttonRow}>
            <button onClick={handleCheck} style={styles.checkButton}>
              Check Password
            </button>
            <button onClick={handleClear} style={styles.clearButton}>
              Clear
            </button>
          </div>

          {/* Result Panel - conditional rendering */}
          {result && (
            <div style={styles.resultPanel}>
              <p style={styles.resultMessage}>{result.message}</p>

              {result.status && (
                <>
                  <p
                    style={{
                      ...styles.resultStatus,
                      color:
                        result.strength === "Strong" ? "#16a34a" : "#dc2626",
                    }}
                  >
                    {result.status}
                  </p>

                  {/* Visual strength indicator */}
                  <div style={styles.barTrack}>
                    <div
                      style={{
                        ...styles.barFill,
                        width: strengthStyles[result.strength].width,
                        backgroundColor: strengthStyles[result.strength].color,
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    display: "flex",
    justifyContent: "center",
    paddingTop: "100px",
    fontFamily: "sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    overflow: "hidden",
    height: "fit-content",
  },
  header: {
    backgroundColor: "black",
    padding: "24px 32px",
  },
  title: {
    color: "#fff",
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  subtitle: {
    color: "#e0e7ff",
    margin: "4px 0 0 0",
  },
  body: {
    padding: "24px 32px",
  },
  label: {
    display: "block",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    padding: "12px 16px",
    fontSize: "16px",
    color: "#334155",
    outline: "none",
  },
  charCount: {
    fontSize: "14px",
    color: "#94a3b8",
    marginTop: "8px",
  },
  buttonRow: {
    display: "flex",
    gap: "16px",
    marginTop: "24px",
  },
  checkButton: {
    flex: 1,
    backgroundColor: "black",
    color: "#fff",
    fontWeight: "600",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    color: "#1e293b",
    fontWeight: "600",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  resultPanel: {
    marginTop: "24px",
    borderTop: "1px solid #e2e8f0",
    paddingTop: "16px",
  },
  resultMessage: {
    fontWeight: "600",
    color: "#1e293b",
    margin: 0,
  },
  resultStatus: {
    fontSize: "14px",
    marginTop: "4px",
  },
  barTrack: {
    width: "100%",
    height: "8px",
    backgroundColor: "#e2e8f0",
    borderRadius: "999px",
    marginTop: "12px",
    overflow: "hidden",
  },
  barFill: {
    height: "100%",
    borderRadius: "999px",
    transition: "width 0.2s ease",
  },
};

export default PasswordChecker;