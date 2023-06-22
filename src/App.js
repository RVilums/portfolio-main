import "./global.styles.scss";
import MainWrapper from "./components/layout/main-wrapper";
import Button from "./components/common/button";

function App() {
  return (
    <MainWrapper>
      <header className="header">
        <nav>
          <ul>
            <Button buttonType="btn">Home</Button>
            <Button buttonType="btn">NAV</Button>
            <Button buttonType="btn"></Button>
            <Button buttonType="btn"></Button>
          </ul>
        </nav>
      </header>
    </MainWrapper>
  );
}

export default App;
