import "./button.styles.scss";

import { NavLink } from "react-router-dom";

const Button = (props) => {
  let buttonComponent;
  if (props.buttonType === "nav-link") {
    buttonComponent = <NavLink>{props.children}</NavLink>;
  }
  if (props.buttonType === "link") {
    buttonComponent = <a>{props.children}</a>;
  }

  if (props.buttonType === "btn") {
    buttonComponent = <button>{props.children}</button>;
  }

  return buttonComponent;
};

export default Button;
