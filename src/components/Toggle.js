import React, {useState} from "react"; //1. Import useState

function Toggle() {
  const [isOn, setIsOn] = useState(false); //2. Set initial state
  
  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "White";
  return <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>; //3. Use the new variable(isOn) to determine what text to display & call setter funct to update state(handleclick)

}

export default Toggle;
