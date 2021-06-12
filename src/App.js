import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

var baseUrl = "https://emoji-encode-decode-backend.shubham44321.repl.co/";

export default function App() {
  const [userInput, setuserInput] = useState("");
  const [result, setResult] = useState("");
  const getEmoji = async () => {
    try {
      var url = `${baseUrl}encode-decode/?text=${userInput}`;
      const res = await axios.get(url);
      setResult(res.data);
    } catch (error) {
      console.log(error);
      setResult("something went wrong,please try again later.");
    }
  };
  const clearData = () => {
    setuserInput("");
    setResult("");
  };
  return (
    <div className="App">
      <h1>Encode-Decode Emoji App</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setuserInput(e.target.value)}
      />
      <div className="btns">
        <button className="btn-primary" onClick={() => getEmoji()}>
          Encode/Decode
        </button>
        <button className="btn-secondary" onClick={() => clearData()}>
          Clear
        </button>
      </div>
      <h1>{result}</h1>
    </div>
  );
}
