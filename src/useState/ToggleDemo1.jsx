import React, { useState } from "react";

function ToggleDemo1() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>{isOn ? "On" : "Off"}</h1>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

export default ToggleDemo1;
