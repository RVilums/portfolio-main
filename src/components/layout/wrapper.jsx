import "./layout.styles.scss";

const Wrapper = (props) => {
  return <main className={`wrapper ${props.className}`}>{props.children}</main>;
};
export default Wrapper;
