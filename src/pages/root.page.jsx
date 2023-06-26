import ThemeWrapper from "../components/layout/theme-wrapper";
import Navigation from "../components/navigation/navigation.component";

const Root = (props) => {
  return (
    <ThemeWrapper>
      <Navigation />
      {props.children}
    </ThemeWrapper>
  );
};

export default Root;
