import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const colors = [
    {
      hex: "#00759A",
      name: "Blue",
    },
    {
      hex: "#F7941D",
      name: "Orange",
    },
    {
      hex: "#A71930",
      name: "Red",
    },
    {
      hex: "#679146",
      name: "Green",
    },
  ];
  const show= useFormInput(false);
  const selector = useFormInput("Color");
  const bgColor  = useFormInput("#fff");
  const toggleDropdown = () => {
    show.onChange(!show.value);
  };
  let setColor = (color, colorName) => {
    show.onChange(show.onChange(false));
    bgColor.onChange(color);
    selector.onChange(colorName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper-dropdown">
          <span onClick={() => toggleDropdown()}>
            <span style={{ background: bgColor.value }}></span>
            {selector.value}
          </span>
          {show.value && (
            <ul className="dropdown">
              {colors.map((color) => (
                <li key={color.hex}
                 onClick={() => setColor(color.hex, color.name)}>
                  <span style={{ background: color.hex }}></span> {color.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}
function useFormInput(initialValue){
  const [value, setValue] = useState(initialValue);
  function handleValueChange(newVal)
    {
    setValue(newVal)
    }  
   return{
      value,
      onChange: handleValueChange
    }
}
export default App;
