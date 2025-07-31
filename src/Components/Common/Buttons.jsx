import { Children } from 'react';
import './button.css'

function Button({color, text, click, children}) {

  return (
    <button style={{ backgroundColor: color }} onClick={click}>
      {children || text}
    </button>
  );
}

export default Button;
