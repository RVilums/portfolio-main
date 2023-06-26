import "./layout.styles.scss";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";

const ThemeWrapper = (props) => {
  const { themeChange } = useContext(ThemeContext);
  return (
    <div className={`theme ${themeChange ? "theme__light" : "theme__dark"}`}>
      {props.children}
    </div>
  );
};

export default ThemeWrapper;
