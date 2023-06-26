import "./global.styles.scss";

import Root from "./pages/root.page";
import Home from "./pages/home.page";
import Wrapper from "./components/layout/wrapper";
import Container from "./components/layout/container";

function App() {
  return (
    <Root>
      <Home />
      <Wrapper>
        <h1>My Expretise</h1>
        <Container className="container--border">
          <div className="expertise__heading">
          <h2>UI/UX Design</h2>
          {/* Icon Here */}
          </div>
          <h3></h3>
        </Container>
        <Container className="container--border">
          <div className="expertise__heading">
          <h2>Software Development</h2>
          {/* Icon Here */}
          </div>
          <h3></h3>
        </Container>
        <Container className="container--border">
          <div className="expertise__heading">
          <h2></h2>
          {/* Icon Here */}
          </div>
          <h3></h3>
        </Container>
      </Wrapper>
    </Root>
  );
}

export default App;
