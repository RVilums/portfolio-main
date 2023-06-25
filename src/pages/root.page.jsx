import MainWrapper from "../components/layout/main-wrapper";
import Navigation from "../components/navigation/navigation.component";

const Root = (props) => {
  return (
    <MainWrapper>
      <Navigation />
      {props.children}
    </MainWrapper>
  );
};

export default Root;
