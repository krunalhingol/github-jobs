import Logo from "../Logo";
import "./style.css";

const JobCard = (props) => {
  const { logo, createdAt, type, title, company, location } = props;
  return (
    <div className="job-card">
      <Logo logo={logo} />
      <span className="created-at color-gray">{createdAt}</span>
      <span className="separator-dot color-gray">.</span>
      <span className="job-type color-gray">{type}</span>
      <h2 className="job-title color-dark-blue">{title}</h2>
      <h3 className="company-name color-gray">{company}</h3>
      <h4 className="job-location color-violet">{location}</h4>
    </div>
  );
};

export default JobCard;
