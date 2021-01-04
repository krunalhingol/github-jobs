import "./style.scss";

const Logo = (props) => {
  const { logo } = props;
  return (
    <div className="logo">
      <img src={logo} alt="company logo" />
    </div>
  );
};

export default Logo;
