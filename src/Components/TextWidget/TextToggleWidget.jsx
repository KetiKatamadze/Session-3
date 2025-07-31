import { useState } from "react";
import Wrapper from "../Common/Wrapper.jsx";
import Button from "../Common/Buttons.jsx";
import "./textwidget.css";

function TextToggleWidget() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  // const close = () => {
  //   setIsVisible(false);
  // };
  // const open = () => {
  //   setIsVisible(true);
  };

  return (
    <Wrapper>
      <h3>ინტერაქტიული ტექსტი და გადამრთველი</h3>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button color={"#4343d1"} click={toggleVisibility}> {isVisible ? "დამალე" : "მაჩვენე"} </Button>
      {isVisible && <span className="text-area">{text}</span>}
      <span>{text.length}</span>
    </Wrapper>
  );
}

export default TextToggleWidget;
