import React from "react";
import "./patient.css";
import { useState } from "react";
import axios from 'axios';
import Hospital from "../../assets/back.svg"
function Patient() {
  const [cause, setAccidentCause] = useState("");
  const [aadhNr, setAadhaarNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("An immediate message is being sent to the family");
    axios.post('http://localhost:5000/post', {"aadhaar": aadhNr, "cause": cause})
    .then((response) => {
        console.log(response.data);
    }
);
  };

  return (
    <div className="final">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="cause">CAUSE OF THE ACCIDENT</h1>
        <input
          type="text"
          value={cause}
          onChange={(e) => setAccidentCause(e.target.value)}
        />
        <h1 className="aadhaarn">AADHAAR NUMBER</h1>
        <input
          type="number"
          value={aadhNr}
          onChange={(e) => setAadhaarNumber(e.target.value)}
        />
        <button className="button" type="submit">Submit</button>
      </form>
      <div>
        <img src={Hospital} className="hospital">
        </img>
      </div>
    </div>
  );
}
export default Patient;
