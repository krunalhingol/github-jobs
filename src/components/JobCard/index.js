import moment from "moment";
import Logo from "../Logo";
import "./style.scss";

const JobCard = (props) => {
  const { logo, createdAt, type, title, company, location } = props;
  const fromNow = moment(createdAt).fromNow();
  return (
    <div className="job-card">
      <Logo logo={logo} />
      <span className="created-at">{fromNow}</span>
      <span className="separator-dot">.</span>
      <span className="job-type">{type}</span>
      <h2 className="job-title">{title}</h2>
      <h3 className="company-name">{company}</h3>
      <h4 className="job-location">{location}</h4>
    </div>
  );
};

export default JobCard;
