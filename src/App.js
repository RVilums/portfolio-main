import "./global.styles.scss";

import Root from "./pages/root.page";
import Home from "./pages/home.page";
import Wrapper from "./components/layout/wrapper";
import Expertise from "./components/expertise/expertise.component";

function App() {
  return (
    <Root>
      <Home />
      <Wrapper>
        <h1>My Expretise</h1>
        <Expertise />
      </Wrapper>
    </Root>
  );
}

export default App;
