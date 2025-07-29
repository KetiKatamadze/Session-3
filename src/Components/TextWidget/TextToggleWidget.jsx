import { useState } from "react";
import Wrapper from "../Counter/Wrapper";
import Button from "../Counter/button.jsx";

function TextToggleWidget() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const close = () => {
    setIsVisible(false);
  };
  const open = () => {
    setIsVisible(true);
  };

  return (
    <Wrapper>
      <h3>ინტერაქტიული ტექსტი და გადამრთველი</h3>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button color={"blue"} text={"დამალე"} click={close} />
      <Button color={"green"} text={"აჩვენე"} click={open} />

      {isVisible && <span className="text-area">{text}</span>}
    </Wrapper>
  );
}

export default TextToggleWidget;
