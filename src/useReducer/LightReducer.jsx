import React, { useReducer } from "react";

const initialState = { isOn: false };
function reducer(state, action) {
  switch (action.type) {
    case "on":
      return { isOn: true };
    case "off":
      return { isOn: false };
    case "toggle":
      return { isOn: !state.isOn };
    default:
      return state;
  }
}

function LightReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.isOn ? "ON" : "OFF"}</h1>
      <button onClick={() => dispatch({ type: "on" })}>Turn On</button>
      <button onClick={() => dispatch({ type: "off" })}>Turn Off</button>
      <button onClick={() => dispatch({ type: "toggle" })}>Toggle</button>
    </div>
  );
}

export default LightReducer;
