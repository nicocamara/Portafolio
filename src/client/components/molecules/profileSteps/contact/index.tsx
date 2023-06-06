import './styles.scss';
import { Portfolio } from '../../../../utils/Type';

type contactProps = {
  date: Portfolio;
};

const Contact = ({ date }: contactProps) => {
  console.log('los datos rey', date);
  return (
    <div className="contact">
      <div className="dvContainer">
        <div className="dvContainer__title">Contact Date</div>
        <hr className="dvContainer__line" />
        <div className="dvContainer__container">
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
};

export default Contact;
