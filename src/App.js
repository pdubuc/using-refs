import React from "react";
import { useRef } from "react";
import "./index.css";

function App() {
  const clickInput = useRef();

  const handleClick = () => {
    clickInput.current.click();
  };

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={clickInput}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
      <p>This simply shows how to make use of Refs</p>
    </div>
  );
}

export default App;
