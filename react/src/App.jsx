import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Admin from "./Components/Admin/components/Admin";

function App() {
  const glassStyle = {
    background: "radial-gradient(circle, #eceaea 0%,  rgba(0,0,0,0.8) 20%)",
    // padding: "1rem",
    color: "white",
    // borderRadius: "8px",
  };
  return (
    <div style={glassStyle}>
      <Admin />
    </div>
  );
}

export default App;
