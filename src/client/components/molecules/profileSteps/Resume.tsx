import { Portfolio } from '../../../utils/Type';
import './styles.scss';

type ResumeProps = {
  date: Portfolio;
};

const Resume = ({ date }: ResumeProps) => (
  <div className="contact">
    <div className="dvContainer">
      <div className="dvContainer__title">OverView Date</div>
      <hr className="dvContainer__line" />
      <div className="dvContainer__container">
        <div className="dvContainer__subtitle">
          User Data
          <hr className="dvContainer__overline" />
        </div>
        <div className="dvContainer__subcontainer">
          <div className="dvContainer__date">
            <span className="dvContainer__span">Name</span>
            {date.overview.firstName}
          </div>
          <div className="dvContainer__date">
            <span className="dvContainer__span">Last Name</span>
            {date.overview.lastName}
          </div>
          <div className="dvContainer__date">
            <span className="dvContainer__span">Birth Date</span>
            {date.overview.birthDate}
          </div>
        </div>
      </div>
      <div className="dvContainer__container">
        <div className="dvContainer__subtitle">
          Contact Data
          <hr className="dvContainer__overline" />
        </div>
        <div className="dvContainer__subcontainer">
          <div className="dvContainer__date">
            <span className="dvContainer__span">E-mail</span>
            {date.overview.email}
          </div>
          <div className="dvContainer__date">
            <span className="dvContainer__span">Phone</span>
            {date.overview.phone}
          </div>
        </div>
      </div>
      <div className="dvContainer__container">
        <div className="dvContainer__subtitle">
          Adress Data
          <hr className="dvContainer__overline" />
        </div>
        <div className="dvContainer__subcontainer">
          <div className="dvContainer__date">
            <span className="dvContainer__span">Country</span>
            {date.overview.country}
          </div>
          <div className="dvContainer__date">
            <span className="dvContainer__span">City</span>
            {date.overview.city}
          </div>

          <div className="dvContainer__date">
            <span className="dvContainer__span">Street</span>
            {date.overview.street}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
