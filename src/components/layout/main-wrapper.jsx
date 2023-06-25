import "./layout.styles.scss";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";

const MainWrapper = (props) => {
  const { themeChange } = useContext(ThemeContext);
  return (
    <div className={`main ${themeChange ? "main__light" : "main__dark"}`}>
      {props.children}
    </div>
  );
};

export default MainWrapper;
