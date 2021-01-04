import "./style.scss";
const Button = (props) => {
  const { onClick, children, isLoading } = props;
  return (
    <button className="btn" onClick={onClick} disabled={isLoading}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
