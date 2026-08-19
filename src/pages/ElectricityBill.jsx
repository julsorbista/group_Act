import { useState } from "react";

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [billDetails, setBillDetails] = useState(null);
  const [error, setError] = useState("");

  const calculateBill = () => {
    setError("");
    setBillDetails(null);

    if (customerName.trim() === "" || consumption === "") {
      setError("Please complete all fields.");
      return;
    }

    const kwh = Number(consumption);

    if (isNaN(kwh) || kwh < 0) {
      setError("Please enter a valid consumption amount.");
      return;
    }

    let rate;

    if (kwh <= 100) {
      rate = 10;
    } else if (kwh <= 200) {
      rate = 12;
    } else if (kwh <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const totalBill = kwh * rate;
    const usageStatus =
      totalBill >= 5000 ? "High Electricity Usage" : "Normal Electricity Usage";

    setBillDetails({
      customerName,
      consumption: kwh,
      rate,
      totalBill,
      usageStatus,
    });
  };

  const clearForm = () => {
    setCustomerName("");
    setConsumption("");
    setBillDetails(null);
    setError("");
  };

  return (
    <div className="card">
      <h1>
        Electricity Bill Calculator

        <span
          style={{
            display: "block",
            marginTop: "4px",
            fontSize: "20px",
            fontWeight: "normal",
          }}
        >
          Activity 4
        </span>
      </h1>

      <label>Customer Name</label>
      <input
        type="text"
        value={customerName}
        onChange={(event) => setCustomerName(event.target.value)}
        placeholder="Enter customer name"
      />

      <label>Consumption (kWh)</label>
      <input
        type="number"
        value={consumption}
        onChange={(event) => setConsumption(event.target.value)}
        placeholder="Enter kWh used"
        min="0"
      />

      <button onClick={calculateBill}>Calculate Bill</button>
      <button onClick={clearForm}>Clear</button>

      {error && <div className="result">{error}</div>}

      {billDetails && (
        <div className="result">
          <h2>Result</h2>

          <p>Customer Name: {billDetails.customerName}</p>
          <p>Consumption: {billDetails.consumption} kWh</p>
          <p>Rate Applied: ₱{billDetails.rate} per kWh</p>
          <p>Total Bill: ₱{billDetails.totalBill.toFixed(2)}</p>
          <p>Usage Status: {billDetails.usageStatus}</p>
        </div>
      )}
    </div>
  );
}

export default ElectricityBill;
