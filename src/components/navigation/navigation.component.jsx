import "./navigation.styles.scss";
import Button from "../common/button/button";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <ul className="navigation__items">
        <Button className="navigation__item" buttonType="nav-link" to="/">
          // home
        </Button>
        <Button
          className="navigation__item"
          buttonType="nav-link"
          to="/expertise"
        >
          // expertise
        </Button>
        <Button className="navigation__item" buttonType="nav-link" to="/work">
          // work
        </Button>
        <Button
          className="navigation__item"
          buttonType="nav-link"
          to="/contacts"
        >
          // contacts
        </Button>
        <Button className="navigation__item" buttonType="nav-link" to="/blog">
          // feedback
        </Button>
      </ul>
    </nav>
  );
};

export default Navigation;
