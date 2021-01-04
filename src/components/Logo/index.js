import "./style.css";

const Logo = (props) => {
  const logoUrl = props.compony_logo;
  return (
    <div className="logo">
      <img
        src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2FVIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--91b6612c2cc865d049f25bad2697066c52d9f77e/Logo%202020.jpg"
        alt="company logo"
      />
    </div>
  );
};

export default Logo;
