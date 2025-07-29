function Button({color, text, click}) {

  return (
    <button style={{ backgroundColor: color }} onClick={click}>
      {text}
    </button>
  );
}

export default Button;
