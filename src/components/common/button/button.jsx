import "./button.styles.scss";

import { NavLink } from "react-router-dom";

const Button = (props) => {
  let buttonComponent;
  if (props.buttonType === "nav-link") {
    buttonComponent = (
      <NavLink className={props.className} to={`${props.to}`}>
        {props.children}
      </NavLink>
    );
  }
  if (props.buttonType === "link") {
    buttonComponent = (
      <a className={props.className} href={props.href ? props.href : ""}>
        {props.children}
      </a>
    );
  }

  if (props.buttonType === "btn") {
    buttonComponent = (
      <button className={`btn ${props.className}`} type={props.type}>
        {props.children}
      </button>
    );
  }

  return buttonComponent;
};

export default Button;
