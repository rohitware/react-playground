import React, { useState } from "react";

function ToggleDemo() {
  const [isVisible, setIsVisible] = useState("false");
  const [isDark, setIsDark] = useState("false");

  return (
    <>
      <div
        style={{
          background: isDark ? "#333" : "#fff",
          color: isDark ? "#fff" : "#333",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <h1>Boolean State</h1>

        {/* toggle visibility */}
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Hide" : "Show"} Message
        </button>
        {isVisible && <p>Hello! I am visible now</p>}

        <br />
        <br />

        {/* toggle theme */}
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? "Light Mode " : "Dark Mode "}
        </button>
      </div>
    </>
  );
}

export default ToggleDemo;
