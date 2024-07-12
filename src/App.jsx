import "./App.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  let [displayValue, setdisplayValue] = useState("");
  let onButtonCLick = (name) => {
    if (name == "C") {
      setdisplayValue("");
    } else if (name === "=") {
      let result = eval(displayValue);
      setdisplayValue(result);
    } else if (name === "←") {
      let back = displayValue.slice(0, -1);
      setdisplayValue(back);
    } else {
      let newvalue = displayValue + name;
      setdisplayValue(newvalue);
    }
    console.log(name);
  };
  return (
    <>
      <div className="container">
        <Footer />
        <div className="calculator">
          <Display displayValue={displayValue} />
          <ButtonsContainer onButtonCLick={onButtonCLick} />
        </div>
      </div>
    </>
  );
}
export default App;
