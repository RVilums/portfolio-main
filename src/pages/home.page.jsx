import Header from "../components/layout/header";
import LightObject from "../components/common/figures/light-object";
import Container from "../components/layout/container";
const Home = () => {
  return (
    <Header>
      <LightObject />
      <Container className="container--flex-end">
        <h1>WEB DEVELOPER</h1>
        <h2>Raitis Vilums</h2>
      </Container>
    </Header>
  );
};

export default Home;
