import "./global.styles.scss";
import Root from './pages/root.page'
import Home from './pages/home.page'
import Wrapper from "./components/layout/wrapper";
import ExpertisePage from "./pages/expertise.page";
function App() {
  return (
    <Root>
      <Home/>
      <Wrapper>
        <ExpertisePage/>
      </Wrapper>
    </Root>
  );
}

export default App;
