import "./expertise-item.styles.scss";
import Container from "../layout/container";

const ExpertiseItem = (props) => {
  const { title, description, icon } = props.data;
  return (
    <Container className="container--border">
      <div className="expertise__heading">
        <h2>{title}</h2>
        {/* icon */}
      </div>
      <h3>{description}</h3>
    </Container>
  );
};

export default ExpertiseItem;
